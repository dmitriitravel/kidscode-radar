import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

// «Попробуйте 7 дней учёбы в лицее бесплатно» — адаптивный лид-блок.
const LF_BASE =
  "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/lead-form/png";

const FEATURES = [
  "Доступ к живым урокам по расписанию",
  "Все записи прошедших уроков",
  "Интерактивные задания и домашки с автопроверкой",
];

const GRADES = [5, 6, 7, 8, 9, 10, 11].map((g) => `Триал ${g} класс`);

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="12" fill="#ffb53d" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrialSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Триал 9 класс");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-12 w-full items-center justify-between rounded-xl bg-white px-4 text-base text-foreground"
      >
        <span>{value}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-[264px] overflow-y-auto rounded-xl bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
        >
          {GRADES.map((g) => (
            <li key={g} role="option" aria-selected={g === value}>
              <button
                type="button"
                onClick={() => {
                  setValue(g);
                  setOpen(false);
                }}
                className="block w-full px-4 py-3 text-left text-base text-foreground hover:bg-muted"
              >
                {g}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TrialBlock() {
  return (
    <section id="trial" aria-labelledby="trial-title" className="scroll-mt-24 bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <div
          className="relative rounded-[24px] p-6 sm:p-10 md:rounded-[32px]"
          style={{ background: "linear-gradient(180deg,#D571FF 0%,#B400FF 74.82%)" }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_minmax(0,360px)_minmax(300px,330px)]">
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
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#ff9e00" }} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#04121b"><path d="M12 21s-7.5-4.6-7.5-9.7C4.5 8 6.6 6 9.1 6c1.6 0 2.6.8 2.9 1.6C12.3 6.8 13.3 6 14.9 6c2.5 0 4.6 2 4.6 5.3C19.5 16.4 12 21 12 21z"/></svg>
                </span>
                <div className="text-white">
                  <div className="text-lg font-semibold">Рады видеть вас снова!</div>
                  <div className="text-sm text-white/70">Выбирайте класс и начинайте учиться</div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <TrialSelect />
                <button
                  type="button"
                  onClick={() => toast.success("Спасибо! Откроем доступ и свяжемся с вами.")}
                  className="h-12 w-full rounded-xl text-base font-semibold text-white"
                  style={{ backgroundColor: "#04121b" }}
                >
                  Начать учиться бесплатно
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
