import { useState } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leadSubmit";

// «Попробуйте 7 дней учёбы в лицее бесплатно» — адаптивный лид-блок с формой заявки.
const LF_BASE =
  "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/lead-form/png";

const FEATURES = [
  "Доступ к живым урокам по расписанию",
  "Все записи прошедших уроков",
  "Интерактивные задания и домашки с автопроверкой",
];

const GRADES = [5, 6, 7, 8, 9, 10, 11].map((g) => `${g} класс`);
const TRIAL_STK = "trial_skysmart_homeschooling";

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="12" fill="#ffb53d" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrialBlock() {
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
    const result = await submitLead({
      parentName: name,
      parentEmail: email,
      parentPhone: phone,
      stk: TRIAL_STK,
    });
    setPending(false);
    if (result.redirect) {
      window.location.href = result.redirect;
      return;
    }
    if (result.ok) {
      toast.success("Спасибо! Откроем доступ и свяжемся с вами.");
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

  const fieldClass = "h-12 w-full rounded-xl border-0 bg-white px-4 text-base text-foreground placeholder:text-muted-foreground";

  return (
    <section id="trial" aria-labelledby="trial-title" className="scroll-mt-24 bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <div
          className="relative rounded-[24px] p-6 sm:p-10 md:rounded-[32px]"
          style={{ background: "linear-gradient(180deg,#D571FF 0%,#B400FF 74.82%)" }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_minmax(0,320px)_minmax(320px,360px)]">
            {/* Текст и список */}
            <div>
              <h2 id="trial-title" className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Попробуйте 7 дней учёбы в лицее бесплатно
              </h2>
              <ul className="mt-6 space-y-3">
                {FEATURES.map((f) => (
                  <li key={f} className="flex gap-3 text-base text-white sm:text-lg">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Изображение */}
            <div className="flex justify-center lg:self-end">
              <picture>
                <source media="(min-width:1024px)" srcSet={`${LF_BASE}/image-1024.png 1x, ${LF_BASE}/image-1024@2x.png 2x`} />
                <source media="(min-width:768px)" srcSet={`${LF_BASE}/image-768.png 1x, ${LF_BASE}/image-768@2x.png 2x`} />
                <img
                  src={`${LF_BASE}/image-375@2x.png`}
                  alt="Ученик лицея Skysmart"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full max-w-[420px] object-contain"
                />
              </picture>
            </div>

            {/* Форма */}
            <form onSubmit={onSubmit} noValidate className="space-y-3">
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
              <button
                type="submit"
                disabled={pending}
                className="h-12 w-full rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "#04121b" }}
              >
                {pending ? "Отправляем…" : "Начать учиться бесплатно"}
              </button>

              <div className="space-y-2 pt-1 text-sm text-white/90">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#04121b]"
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
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#04121b]"
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
      </div>
    </section>
  );
}
