// Отправка заявки в Skyeng через skygate (Get4Click интеграция Skysmart).
// Обычный режим (по serviceTypeKey/STK):
const ENDPOINT =
  "https://skygate.skyeng.ru/api/v1/proxy-kid/create?source_type=get4click_skysmart&product=get4click_skysmart";
// Режим «комплектация» (package) — когда заданы и tariffUuid (uuid), и productKitCode:
const ENDPOINT_PACKAGE =
  "https://skygate.skysmart.ru/api/v1/es-kit/proxy-kid/create?source_type=get4click_skysmart&product=get4click_skysmart";

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
    params.set("serviceTypeKey", "mini_course_kids_russian");
    if (data.uuid) params.set("uuid", data.uuid);
  }

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
