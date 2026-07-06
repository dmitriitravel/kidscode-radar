import { useState } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leadSubmit";

// «Узнайте больше о школе на бесплатной консультации» — маскот + чеклист + форма заявки (тёмная гамма).
const MASCOT = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/consultation-form/mascot.png";
const MASCOT_2X = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/consultation-form/mascot@2x.png";
const MASCOT_WEBP = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/consultation-form/mascot.webp";
const MASCOT_WEBP_2X = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/consultation-form/mascot@2x.webp";

const BENEFITS = [
  "Покажем, как проходят уроки на нашей платформе",
  "Поможем выбрать тариф и разобраться с документами",
  "Откроем бесплатный доступ, чтобы вы могли всё попробовать сами",
];

const GRADES = [5, 6, 7, 8, 9, 10, 11].map((g) => `${g} класс`);

// UUID комплектации по классу (для отправки заявки).
const UUID_BY_GRADE: Record<string, string> = {
  "5": "6e84a51e-181d-4515-b70c-4ee834120730",
  "6": "866bec87-e956-4c26-9155-06b1566458a5",
  "7": "2a3c7dbc-30c2-428d-82dc-4869fd640010",
  "8": "0d57ce9b-3d43-47e6-9fa7-a81e081a4ce1",
  "9": "e9f472bc-b86a-426f-b7f4-2dbca44b8b07",
  "10": "a1272ff1-6129-419c-b405-bc70cc9f9021",
  "11": "ec3fd476-c0f0-44e8-a6c7-14c337bcbd53",
};

export function ConsultBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [consent, setConsent] = useState(false);
  const [promo, setPromo] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      toast.error("Укажите имя родителя");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      toast.error("Укажите телефон или e-mail");
      return;
    }
    if (!consent) {
      toast.error("Нужно согласие на обработку персональных данных");
      return;
    }
    setPending(true);
    const gradeNum = grade.match(/\d+/)?.[0];
    const result = await submitLead({
      parentName: name,
      parentEmail: email,
      parentPhone: phone,
      stk: gradeNum ? `skysmart_homeschooling_${gradeNum}_grade` : "",
      uuid: gradeNum ? UUID_BY_GRADE[gradeNum] : undefined,
    });
    setPending(false);
    if (result.redirect) {
      window.location.href = result.redirect;
      return;
    }
    if (result.ok) {
      toast.success("Спасибо! Заявка отправлена, мы свяжемся с вами.");
      setName("");
      setEmail("");
      setPhone("");
      setGrade("");
      setConsent(false);
      setPromo(false);
    } else {
      toast.error(result.error || "Не удалось отправить заявку.");
    }
  };

  const fieldClass =
    "h-12 w-full rounded-xl border-0 bg-white px-4 text-base text-foreground placeholder:text-muted-foreground";

  return (
    <section id="consult" aria-labelledby="consult-title" style={{ backgroundColor: "#f4f5f6" }} className="scroll-mt-24 py-14 sm:py-16">
      <div className="container-page">
        <div className="flex justify-center">
          <picture>
            <source type="image/webp" srcSet={`${MASCOT_WEBP} 1x, ${MASCOT_WEBP_2X} 2x`} />
            <img
              src={MASCOT}
              srcSet={`${MASCOT} 1x, ${MASCOT_2X} 2x`}
              alt="Маскот Skysmart"
              width={180}
              height={150}
              loading="lazy"
              decoding="async"
              className="relative z-10 mb-[-40px] h-auto w-[160px] object-contain sm:w-[200px]"
            />
          </picture>
        </div>

        <div
          className="rounded-3xl p-6 pt-12 text-white sm:p-10 sm:pt-14"
          style={{ background: "linear-gradient(160deg,#181222 0%,#0d0a13 100%)" }}
        >
          <h2 id="consult-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
            Узнайте больше о школе на бесплатной консультации
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {BENEFITS.map((b) => (
              <p key={b} className="text-center text-base leading-snug text-white/90">{b}</p>
            ))}
          </div>

          <form className="mt-8" onSubmit={onSubmit} noValidate>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя родителя"
                aria-label="Имя родителя"
                autoComplete="name"
                className={fieldClass}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Почта родителя"
                aria-label="Почта родителя"
                autoComplete="email"
                inputMode="email"
                className={fieldClass}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                aria-label="Телефон родителя"
                autoComplete="tel"
                inputMode="tel"
                className={fieldClass}
              />
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                aria-label="Класс"
                className={`${fieldClass} appearance-none`}
              >
                <option value="" disabled>Класс</option>
                {GRADES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-xl px-7 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ background: "linear-gradient(180deg,#cf9bff,#a86bf0)" }}
            >
              {pending ? "Отправляем…" : "Записаться"}
            </button>

            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-6">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#a86bf0]"
                />
                <span>
                  Даю согласие на обработку{" "}
                  <a
                    href="https://legal.skyeng.ru/upload/document-version-pdf/1BcCZSVE/NkS-8hoq/Icjjk9vw/OOSkLtYz/original/4050.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="underline"
                  >
                    персональных данных
                  </a>
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={promo}
                  onChange={(e) => setPromo(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#a86bf0]"
                />
                <span>
                  Соглашаюсь на получение{" "}
                  <a
                    href="https://legal.skyeng.ru/upload/document-version-pdf/VJ0cRv8U/j1K207LU/8JqOoUkY/InLIltOn/original/4051.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="underline"
                  >
                    рекламы
                  </a>
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
