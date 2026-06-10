import { LeadDialog } from "./LeadDialog";

const HERO_IMAGE =
  "https://static.tildacdn.com/tild3732-3361-4630-a532-313235373736/Image_Holder_1.png";

const HERO_POINTS = [
  "Полноценная альтернатива обычной школе",
  "Аттестат государственного образца от школы-партнёра",
  "3–4 урока в день с сильными преподавателями",
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-white pb-12 pt-4">
      <div className="container-page">
        <div
          className="relative grid items-stretch overflow-hidden rounded-[28px] lg:rounded-[36px] lg:grid-cols-[1.05fr_0.95fr]"
          style={{
            background: "linear-gradient(115deg,#ffe7b0 0%,#ffd478 40%,#ffbe54 100%)",
            minHeight: "min(520px, 72vh)",
          }}
        >
          {/* мягкий световой круг за фото */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-4%] top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 rounded-full lg:block"
            style={{
              background:
                "radial-gradient(circle,#fff3d6 0%,rgba(255,243,214,0) 62%)",
              opacity: 0.75,
            }}
          />

          <div className="relative z-10 self-center p-6 sm:p-10 lg:p-12">
            <span
              className="inline-block rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(90deg,#b16cf0,#7c5cf5)" }}
            >
              −20% для новых учеников
            </span>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-bold leading-[1.03] text-[#1b2330] sm:text-5xl lg:text-6xl"
            >
              Домашнее обучение
              <br />
              для 5–11 классов
            </h1>
            <ul className="mb-8 mt-7 flex max-w-md flex-col gap-3.5">
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-[17px] font-medium leading-snug">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3.5">
              <LeadDialog
                triggerLabel="Получить консультацию"
                triggerClassName="btn-dark inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold"
              />
              <a
                href="#trial"
                className="btn-accent inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold"
              >
                Попробовать бесплатно
              </a>
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-center lg:justify-end">
            <img
              src={HERO_IMAGE}
              alt="Школьница с игрушкой-талисманом Skysmart"
              width={620}
              height={563}
              loading="eager"
              decoding="async"
              className="h-auto w-full max-w-[360px] object-contain object-bottom lg:max-w-[620px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
