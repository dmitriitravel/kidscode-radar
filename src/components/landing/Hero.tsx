import { HERO_CARDS } from "@/data/landing";
import { LeadDialog } from "./LeadDialog";

/** Декоративные мягкие фигуры — CSS вместо тяжёлых картинок (хорошо для LCP). */
function FloatingCard({
  emoji,
  text,
  className,
}: {
  emoji: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden max-w-[230px] rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-card md:block ${className ?? ""}`}
    >
      <span className="mb-1 block text-lg" aria-hidden="true">
        {emoji}
      </span>
      {text}
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-surface-soft"
    >
      {/* мягкие фирменные блобы фона */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-[-10%] h-[420px] w-[420px] rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ffd58a 0%, #ffb347 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] bottom-[-12%] h-[360px] w-[360px] rounded-full opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #ffe3a8 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="relative min-h-[520px] py-10 lg:min-h-[600px] lg:py-16">
          {/* плавающие карточки, как на исходном первом экране */}
          <FloatingCard
            emoji={HERO_CARDS[0].emoji}
            text={HERO_CARDS[0].text}
            className="left-2 top-16 lg:left-8"
          />
          <FloatingCard
            emoji={HERO_CARDS[1].emoji}
            text={HERO_CARDS[1].text}
            className="left-2 top-56 lg:left-16 lg:top-72"
          />
          <FloatingCard
            emoji={HERO_CARDS[2].emoji}
            text={HERO_CARDS[2].text}
            className="right-2 top-44 lg:right-4 lg:top-56"
          />

          {/* основной блок с заголовком */}
          <div className="relative z-10 ml-auto max-w-2xl rounded-3xl bg-white/70 p-6 backdrop-blur-sm sm:p-8 lg:mt-48 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Домашний лицей
            </h1>
            <p className="mt-4 max-w-xl text-lg text-foreground/75 sm:text-xl">
              Школьная программа с 5 по 11 класс — с учителями, расписанием и
              аттестатом государственного образца
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <LeadDialog
                triggerLabel="Записаться на консультацию"
                triggerClassName="btn-accent inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold"
              />
              <a
                href="#trial"
                className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-white px-7 py-3.5 text-base font-semibold transition-colors hover:border-foreground/30"
              >
                Попробовать 7 дней бесплатно
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* промо-полоса набора */}
      <div style={{ backgroundColor: "var(--brand-accent)" }}>
        <div className="container-page">
          <div className="flex flex-col items-center justify-center gap-2 py-3 text-center text-sm font-medium text-white sm:flex-row sm:gap-4">
            <span>
              Открыт набор на 2026/27 учебный год — −20% для новых учеников
            </span>
            <a
              href="#tariffs"
              className="rounded-lg bg-white/20 px-4 py-1.5 font-semibold transition-colors hover:bg-white/30"
            >
              Узнать об обучении
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
