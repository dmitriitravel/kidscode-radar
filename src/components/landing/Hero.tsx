import { LeadDialog } from "./LeadDialog";

const HERO_IMAGE =
  "https://cdn-user84060.skyeng.ru/uploads/image-holder-1-mini-webp-6a31221f887cc554627720.webp";
const HERO_IMAGE_MOBILE =
  "https://cdn-user84060.skyeng.ru/uploads/image-holder-1-mini-webp-360-6a3122fd76bd3904355097.webp";

const HERO_POINTS = [
  "Полноценная альтернатива обычной школе",
  "Аттестат государственного образца от школы-партнёра",
  "3–4 урока в день с сильными преподавателями",
];

const BADGE_GRADIENT = "linear-gradient(90deg,#caa0ff,#a96bf2)";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-white pb-12 pt-8">
      <div className="container-page">
        <div className="relative">
          {/* Плашка со скидкой в верхнем левом углу */}
          <span
            className="absolute -top-3 left-0 z-30 inline-block rounded-2xl px-6 py-3 text-base font-semibold text-white sm:text-lg"
            style={{ background: BADGE_GRADIENT }}
          >
            −20% для новых учеников
          </span>

          <div
            className="relative grid items-stretch overflow-hidden rounded-[28px] lg:rounded-[36px] lg:grid-cols-[1.05fr_0.95fr]"
            style={{
              background: "linear-gradient(120deg,#fdebc7 0%,#ffd886 42%,#ffc24c 100%)",
              minHeight: "min(520px, 72vh)",
            }}
          >
            {/* Скошенный верхний край (срез в левом верхнем углу) */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-20 h-12 w-[340px] max-w-[70%] bg-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />

            {/* мягкий световой круг за фото */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-4%] top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 rounded-full lg:block"
              style={{
                background: "radial-gradient(circle,#fff3d6 0%,rgba(255,243,214,0) 62%)",
                opacity: 0.7,
              }}
            />

            <div className="relative z-10 self-center p-6 pt-12 sm:p-10 sm:pt-14 lg:p-12">
              <h1
                id="hero-title"
                className="text-4xl font-bold leading-[1.03] text-[#1b2330] sm:text-5xl lg:text-6xl"
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
                      style={{ backgroundColor: "#ff9e00" }}
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
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: BADGE_GRADIENT }}
                >
                  Попробовать бесплатно
                </a>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-center lg:justify-end">
              <picture>
                <source media="(max-width:640px)" srcSet={HERO_IMAGE_MOBILE} />
                <img
                  src={HERO_IMAGE}
                  alt="Школьница с игрушкой-талисманом Skysmart"
                  width={548}
                  height={498}
                  decoding="async"
                  className="aspect-[548/498] h-auto w-full max-w-[340px] object-contain object-bottom lg:max-w-[560px]"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
