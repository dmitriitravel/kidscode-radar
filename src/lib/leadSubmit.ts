// Отправка заявки в Skyeng через skygate (Get4Click интеграция Skysmart).
const ENDPOINT =
  "https://skygate.skyeng.ru/api/v1/proxy-kid/create?source_type=get4click_skysmart&product=get4click_skysmart";

export interface LeadData {
  parentName: string;
  parentEmail?: string;
  parentPhone?: string;
  // stk используется для сборки ссылки онбординга у пользователей с кабинетом
  // и передаётся в теле заявки.
  stk?: string;
  // uuid выбранной комплектации/класса (передаётся в теле заявки).
  uuid?: string;
}

export interface LeadResult {
  ok: boolean;
  redirect?: string;
  message?: string;
  error?: string;
}

export async function submitLead(data: LeadData): Promise<LeadResult> {
  const params = new URLSearchParams();
  params.set("parentName", data.parentName.trim());
  if (data.parentEmail) params.set("parentEmail", data.parentEmail.trim());
  if (data.parentPhone) params.set("parentPhone", data.parentPhone.trim());
  // childName обязателен — при отсутствии отдельного поля используем имя родителя.
  params.set("childName", data.parentName.trim() || "Ученик");
  params.set("serviceTypeKey", "mini_course_kids_russian");
  params.set("generateLoginLinkTo", "https://start.skyeng.ru/");
  params.set("locale", "ru");
  params.set("serviceLocale", "ru");
  params.set("country", "RU");
  params.set("tilda", "true");
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) params.set("timezone", tz);
  } catch {
    /* noop */
  }

  const stk = data.stk || "";
  if (stk) params.set("stk", stk);
  if (data.uuid) params.set("uuid", data.uuid);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
    });
    const json = await res.json().catch(() => null);

    if (res.ok && json) {
      // Есть готовая логин-ссылка — отправляем пользователя по ней.
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
