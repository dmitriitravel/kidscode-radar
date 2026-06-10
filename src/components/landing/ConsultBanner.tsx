import { LeadDialog } from "./LeadDialog";

const MASCOT =
  "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/consultation-form/mascot.webp";

// Адаптивный CTA-баннер «Подойдёт ли онлайн-обучение вашему ребёнку?»
// ПК — в строку (текст · маскот · кнопка), мобильные — стопкой (текст, кнопка, маскот).
export function ConsultBanner() {
  return (
    <section aria-labelledby="consult-banner-title" className="bg-white py-6">
      <div className="container-page">
        <div
          className="relative flex flex-col items-stretch gap-6 overflow-hidden rounded-3xl px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-6 md:text-left"
          style={{ background: "linear-gradient(110deg,#a32be6 0%,#c9a6f2 100%)" }}
        >
          <div className="md:order-1 md:max-w-[520px]">
            <h2
              id="consult-banner-title"
              className="text-xl font-bold leading-snug text-white sm:text-2xl"
            >
              Подойдёт ли онлайн-обучение вашему ребёнку?
            </h2>
            <p className="mt-2 text-base text-white/80 sm:text-lg">
              Поможем разобраться на бесплатной консультации
            </p>
          </div>

          <div className="order-3 flex justify-center md:order-2">
            <img
              src={MASCOT}
              alt=""
              aria-hidden="true"
              width={204}
              height={150}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-[68%] max-w-[300px] md:h-[140px] md:w-auto"
            />
          </div>

          <div className="order-2 md:order-3">
            <LeadDialog
              triggerLabel="Получить консультацию"
              triggerClassName="btn-dark inline-flex w-full items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold md:w-auto"
              title="Получить консультацию"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
