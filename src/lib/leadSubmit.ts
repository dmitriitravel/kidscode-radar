import { getHitId } from "./formAnalytics";

// Отправка заявки в Skyeng через skygate (Get4Click интеграция Skysmart).
// Обычный режим (по serviceTypeKey/STK):
const ENDPOINT =
  "https://skygate.skyeng.ru/api/v1/proxy-kid/create?source_type=get4click_skysmart&product=get4click_skysmart";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

// Добавляет общие для всех заявок поля: hitId, uri, user_agent, UTM, promoCode, acceptedAgreements.
function addCommonParams(params: URLSearchParams, promo?: boolean) {
  const hitId = getHitId();
  if (hitId) params.set("hitId", hitId);
  if (typeof window !== "undefined") {
    params.set("uri", window.location.href);
    params.set("user_agent", navigator.userAgent);
    try {
      const q = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach((k) => {
        const v = q.get(k);
        if (v) params.set(k, v);
      });
      const promoCode = q.get("promoCode") || q.get("promocode");
      if (promoCode) params.set("promoCode", promoCode);
    } catch {
      /* noop */
    }
  }
  // Согласованный fallback versionId (обязательный регистрационный + промо-документ).
  params.append("acceptedAgreements[]", "3981");
  if (promo) params.append("acceptedAgreements[]", "3982");
}
// Режим «комплектация» (package) — когда заданы и tariffUuid (uuid), и productKitCode.
// Без query source_type/product: с ними es-kit endpoint возвращает 500.
const ENDPOINT_PACKAGE =
  "https://skygate.skysmart.ru/api/v1/es-kit/proxy-kid/create";

export interface LeadData {
  parentName: string;
  parentEmail?: string;
  parentPhone?: string;
  // stk используется для сборки ссылки онбординга у пользователей с кабинетом
  // и передаётся в теле заявки.
  stk?: string;
  // uuid тарифа/комплектации по классу (tariffUuid).
  uuid?: string;
  // код комплектации (product kit code). Вместе с uuid включает package-режим.
  productKitCode?: string;
  // маркетинговое согласие.
  promo?: boolean;
  // переопределение serviceTypeKey (для не-package режима). По умолчанию mini_course_kids_russian.
  serviceTypeKey?: string;
}

export interface LeadResult {
  ok: boolean;
  redirect?: string;
  message?: string;
  error?: string;
}

export async function submitLead(data: LeadData): Promise<LeadResult> {
  const isPackage = !!(data.uuid && data.productKitCode);

  const params = new URLSearchParams();
  params.set("parentName", data.parentName.trim());
  if (data.parentEmail) params.set("parentEmail", data.parentEmail.trim());
  if (data.parentPhone) params.set("parentPhone", data.parentPhone.trim());
  // childName обязателен — при отсутствии отдельного поля используем имя родителя.
  params.set("childName", data.parentName.trim() || "Ребенок");
  params.set("generateLoginLinkTo", "https://start.skyeng.ru/");
  params.set("locale", "ru");
  params.set("serviceLocale", "ru");
  params.set("country", "RU");
  params.set("tilda", "true");
  params.set("registrationCheckbox", "true");
  if (data.promo) params.set("promoCheckbox", "true");
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) params.set("timezone", tz);
  } catch {
    /* noop */
  }

  const stk = data.stk || "";
  if (stk) params.set("stk", stk);

  if (isPackage) {
    // Package-режим: тариф + комплектация определяют продукт, serviceTypeKey не шлём.
    params.set("tariffUuid", data.uuid as string);
    params.set("uuid", data.uuid as string);
    params.set("productKitCode", data.productKitCode as string);
  } else {
    params.set("serviceTypeKey", data.serviceTypeKey || "mini_course_kids_russian");
    if (data.uuid) params.set("uuid", data.uuid);
  }

  addCommonParams(params, data.promo);

  const endpoint = isPackage ? ENDPOINT_PACKAGE : ENDPOINT;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
    });
    const json = await res.json().catch(() => null);

    if (res.ok && json) {
      // Готовая ссылка на вход/редирект — отправляем пользователя по ней.
      if (json.redirectUrl) return { ok: true, redirect: json.redirectUrl };
      if (json.loginLink) return { ok: true, redirect: json.loginLink };
      // Пользователь уже имеет кабинет — собираем ссылку на онбординг.
      if (json.userId && stk) {
        return {
          ok: true,
          redirect: `https://student.skyeng.ru/go/${json.userId}/${stk}?path=onboarding`,
        };
      }
      return { ok: true };
    }

    if (json?.exception?.message) return { ok: false, error: json.exception.message };
    return { ok: false, error: "Не удалось отправить заявку. Попробуйте ещё раз." };
  } catch {
    // Сетевая/CORS ошибка: лид сохраняется на стороне get4click, считаем как успех.
    return { ok: true };
  }
}
