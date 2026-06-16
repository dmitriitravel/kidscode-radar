import { useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { LeadDialog } from "@/components/landing/LeadDialog";

// «Выбирайте подходящий тариф» — 4 тарифа, на ПК в ряд, на мобильных слайдер.
type Plan = {
  name: string;
  desc: string;
  tag: { text: string; green: boolean };
  features: string[];
  oldPrice: string;
  price: string;
  note: string;
  badge?: { text: string; grad: string };
  dark?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Стандарт",
    desc: "Школьная программа",
    tag: { text: "без прикрепления/аттестации", green: false },
    features: [
      "Вебинары по предметам с активным участием. Можно присутствовать или смотреть в записи",
      "Домашние задания с автоматической проверкой",
      "Классный руководитель",
      "Регулярные отчёты по прогрессу и активности ученика на уроках",
      "5 клубов на выбор, можно посещать все",
      "Проектории и встречи с экспертами",
    ],
    oldPrice: "10 895 ₽ / мес.",
    price: "от 8716 ₽",
    note: "Рассрочка на 12 месяцев",
  },
  {
    name: "Оптимум",
    desc: "Полноценная замена школе",
    tag: { text: "прикрепление и аттестация", green: true },
    features: [
      "Всё, что в тарифе Стандарт",
      "Письменные домашние задания с ручной проверкой от учителя",
      "Личные встречи с классным руководителем",
      "Можно прикрепиться к школе, пройти аттестацию и сдать ОГЭ/ЕГЭ",
      "Уроки в мини-группах по математике, русскому и английскому языку",
    ],
    oldPrice: "24 258 ₽ / мес.",
    price: "от 19 406 ₽",
    note: "Рассрочка на 12 месяцев",
    badge: { text: "популярно", grad: "linear-gradient(0deg,#ff64b0,#ff9acc)" },
  },
  {
    name: "ИТ-профиль",
    desc: "Углублённая программа по профильным предметам",
    tag: { text: "прикрепление и аттестация", green: true },
    features: [
      "Всё, что в тарифах Стандарт и Оптимум",
      "4 сессии с нейропсихологом по запросу",
      "Уроки в мини-группах по алгебре, информатике, программированию и английскому",
      "Куратор-наставник с опытом в профильной профессии",
    ],
    oldPrice: "31 098 ₽ / мес.",
    price: "от 24 878 ₽",
    note: "Рассрочка на 12 месяцев",
    badge: { text: "новинка", grad: "linear-gradient(0deg,#ff9e00,#ffb53d)" },
  },
  {
    name: "Премиум",
    desc: "Индивидуальная программа и поддержка",
    tag: { text: "прикрепление и аттестация", green: true },
    features: [
      "Всё, что в тарифах Стандарт и Оптимум",
      "8 сессий с нейропсихологом по запросу",
      "Уроки в мини-группах по математике, русскому и английскому языку",
      "4 занятия один на один с преподавателями по предметам на выбор — каждую неделю",
    ],
    oldPrice: "47 775 ₽ / мес.",
    price: "от 38 220 ₽",
    note: "Рассрочка на 12 месяцев",
    badge: { text: "рекомендуем", grad: "linear-gradient(0deg,#d571ff,#e6a8ff)" },
    dark: true,
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const dark = plan.dark;
  const muted = dark ? "text-white/60" : "text-foreground/60";
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-5 ${dark ? "text-white" : "bg-white text-foreground"}`}
      style={dark ? { background: "linear-gradient(180deg,#7919a7 38%,#150016 100%)" } : undefined}
    >
      {plan.badge && (
        <span
          className="absolute right-0 top-0 px-4 py-2 text-sm font-medium text-white"
          style={{ background: plan.badge.grad, borderRadius: "0 16px 0 16px" }}
        >
          {plan.badge.text}
        </span>
      )}
      <h3 className="pr-24 text-2xl font-bold leading-tight">{plan.name}</h3>
      <p className={`mt-2 text-sm ${muted}`}>{plan.desc}</p>

      <span
        className={`mt-4 inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[13px] ${
          plan.tag.green ? "text-foreground/70" : dark ? "text-white/70" : "text-foreground/50"
        }`}
        style={{ backgroundColor: plan.tag.green ? "#f2ffbd" : dark ? "rgba(255,255,255,.12)" : "#f4f4f4" }}
      >
        {plan.tag.text}
      </span>

      <ul className="mt-5 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: dark ? "#de7aff" : "#00c1ff" }} aria-hidden="true" />
            <span className={`text-sm leading-snug ${muted}`}>{f}</span>
          </li>
        ))}
      </ul>

      <hr className={`my-4 border-0 ${dark ? "h-px bg-white/20" : "h-px bg-foreground/10"}`} />
      <p className={`text-base line-through ${dark ? "text-white/50" : "text-foreground/50"}`}>{plan.oldPrice}</p>
      <p className="mt-1 text-2xl font-bold leading-none">
        {plan.price} <span className={`text-base font-normal ${muted}`}>/ мес.</span>
      </p>
      <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-foreground/40"}`}>{plan.note}</p>

      <div className="mt-5">
        <a
          href="#consult"
          className={`inline-flex h-12 w-full items-center justify-center rounded-xl text-base font-semibold transition-colors ${
            dark ? "bg-[#de7aff] text-white hover:bg-[#e38fff]" : "bg-[#04121b] text-white hover:bg-[#1d3949]"
          }`}
        >
          Выбрать
        </a>
      </div>
    </article>
  );
}

export function TariffsPlans() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-plan-card]");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="tariffs" aria-labelledby="tariffs-title" style={{ backgroundColor: "#f4f5f6" }} className="scroll-mt-24 py-14 sm:py-16">
      <div className="container-page">
        <h2 id="tariffs-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Выбирайте подходящий тариф
        </h2>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-lg sm:text-xl">
          <span>Со скидкой</span>
          <span className="inline-block -rotate-2 rounded-full px-3 py-0.5 font-medium" style={{ backgroundColor: "#ffb53d" }}>
            до 20%
          </span>
          <span>на 2026/27 учебный год</span>
        </p>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-plan-card
              className="w-[min(300px,72vw)] shrink-0 snap-start lg:w-auto"
            >
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Предыдущий тариф"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Следующий тариф"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <LeadDialog
            triggerLabel="Подробный состав тарифов"
            triggerClassName="inline-flex items-center justify-center rounded-xl bg-[#d571ff] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#e38fff]"
            title="Подробный состав тарифов"
          />
        </div>
      </div>
    </section>
  );
}
