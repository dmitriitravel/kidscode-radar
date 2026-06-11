import { useEffect, useRef, useState } from "react";
import { ChevronDown, X, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

// «Подберите расписание…» — CTA-блок с поп-апом бесплатной консультации и выбором класса.
const GRADES = [5, 6, 7, 8, 9, 10, 11].map((g) => `${g} класс`);

const BENEFITS = [
  "Расскажем о нашей школе",
  "Составим персональный план обучения",
  "Поможем выбрать мотивирующую цель",
];

function ClassSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
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
        className="flex h-12 w-full items-center justify-between rounded-xl px-4 text-base text-foreground"
        style={{ backgroundColor: "#f4f4f6" }}
      >
        <span className={value ? "" : "text-muted-foreground"}>{value || "Класс"}</span>
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
                  onChange(g);
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

export function PickSchedule() {
  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState("");

  return (
    <section aria-labelledby="pick-title" className="bg-white py-14 sm:py-16">
      <div className="container-page">
        <div
          className="flex flex-col items-center rounded-[28px] px-6 py-12 text-center md:rounded-[32px] md:py-16"
          style={{ background: "radial-gradient(120% 120% at 50% 0%, #ffe9f3 0%, #fff4e3 60%, #fdf6ee 100%)" }}
        >
          <h2 id="pick-title" className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Подберите расписание, которое подойдёт вашему ребёнку
          </h2>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white"
            style={{ backgroundColor: "#ff9e00" }}
          >
            Подобрать расписание
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
          style={{ background: "radial-gradient(80% 80% at 50% 30%, rgba(255,150,210,0.45), rgba(0,0,0,0.55))" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Бесплатная консультация"
        >
          <div className="relative flex w-full max-w-4xl items-start gap-6" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 text-foreground hover:bg-white md:flex"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-2xl font-bold leading-tight">Посетите бесплатную консультацию</h3>
              <span
                className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "#ff9e00" }}
                aria-hidden="true"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M12 21s-7.5-4.6-7.5-9.7C4.5 8 6.6 6 9.1 6c1.6 0 2.6.8 2.9 1.6C12.3 6.8 13.3 6 14.9 6c2.5 0 4.6 2 4.6 5.3C19.5 16.4 12 21 12 21z" /></svg>
              </span>
              <p className="mt-5 text-xl font-bold">Рады видеть вас снова!</p>
              <p className="mt-1 text-muted-foreground">Начните учиться на выгодных условиях</p>
              <div className="mt-6 space-y-3 text-left">
                <ClassSelect value={grade} onChange={setGrade} />
                <button
                  type="button"
                  onClick={() => toast.success("Спасибо! Запишем вас на консультацию.")}
                  className="h-12 w-full rounded-xl text-base font-semibold text-white"
                  style={{ backgroundColor: "#ff9e00" }}
                >
                  Записаться на консультацию
                </button>
              </div>
            </div>

            <ul className="hidden flex-1 space-y-4 pt-2 md:block">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2 text-base font-medium">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff9e00" className="mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
