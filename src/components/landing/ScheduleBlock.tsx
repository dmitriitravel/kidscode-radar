import { useState } from "react";

// «Расписание устроено так, чтобы ребёнок мог всё успевать» — вкладки с примерами расписаний.
interface SchedTab {
  label: string;
  title: string;
  img: string;
  alt: string;
  w: number;
  h: number;
}

const TABS: SchedTab[] = [
  {
    label: "Углублённое изучение",
    title: "Пример расписания занятий 7 класса",
    img: "https://cdn-user30887.skyeng.ru/uploads/raspisaniye-uglublennoye-izucheniye-68df7ec70aa7e259227734.png",
    alt: "Пример расписания занятий 7-го класса",
    w: 970,
    h: 568,
  },
  {
    label: "Тренировки и спорт",
    title: "Пример расписания занятий 9 класса",
    img: "https://cdn-user30887.skyeng.ru/uploads/rapisaniye-sport-68df8591ee3b6927699939.png",
    alt: "Пример расписания занятий 9-го класса",
    w: 970,
    h: 625,
  },
  {
    label: "Комфортная учёба",
    title: "Пример расписания занятий 6 класса",
    img: "https://cdn-user30887.skyeng.ru/uploads/raspisaniye-komfortnaya-ucheba-68df8a55bf074122203197.png",
    alt: "Пример расписания занятий 6-го класса",
    w: 970,
    h: 568,
  },
  {
    label: "Поступление за рубеж",
    title: "Пример расписания занятий 9 класса",
    img: "https://cdn-user30887.skyeng.ru/uploads/raspisaniye-postupleniye-za-rubezh-68df81c0f3f9e747894057.png",
    alt: "Пример расписания занятий 9-го класса",
    w: 970,
    h: 568,
  },
];

export function ScheduleBlock() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="schedule-title" className="bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <h2 id="schedule-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Расписание устроено так, чтобы ребёнок мог всё успевать
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Варианты расписания">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="rounded-full px-[18px] py-[11px] text-sm font-medium transition-colors sm:text-base"
              style={
                i === active
                  ? { backgroundColor: "var(--brand-accent)", color: "#fff" }
                  : { backgroundColor: "#ededed", color: "#000" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] bg-white p-5 sm:rounded-[32px] sm:p-8">
          <h3 className="text-xl font-medium text-black sm:text-2xl">{TABS[active].title}</h3>
          <div className="mt-5 overflow-x-auto">
            <img
              key={TABS[active].img}
              src={TABS[active].img}
              alt={TABS[active].alt}
              width={TABS[active].w}
              height={TABS[active].h}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full min-w-[640px] rounded-2xl sm:min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
