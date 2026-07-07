// Реализация Figma-фрейма «header and subtext / horizontal / size M»
const backpack =
  "https://static.tildacdn.com/tild3434-3863-4139-b838-333834396634/Image_Container_3_1.png";
const controller =
  "https://static.tildacdn.com/tild3833-3034-4535-b662-373336643662/Image_Container_2.png";

export function PromoBanner() {
  return (
    <section aria-label="Открыт набор" className="py-6">
      <div className="container-page">
        <div
          className="relative flex min-h-[224px] items-center justify-center overflow-hidden rounded-3xl px-6 py-9 text-center md:px-[200px] lg:px-[260px]"
          style={{ backgroundColor: "#091e2a" }}
        >
          <img
            src={backpack}
            alt=""
            aria-hidden="true"
            width={215}
            height={220}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute bottom-0 left-1.5 hidden w-[170px] select-none md:block lg:w-[215px]"
          />

          <div className="relative z-10 flex max-w-[687px] flex-col items-center gap-4">
            <h2 className="text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-[40px]">
              Открыт набор на 2026/27 учебный год в домашнем лицее Skysmart
            </h2>
            <p className="text-lg text-white sm:text-xl lg:text-2xl">
              Скидка 20% для новых учеников
            </p>
            <a
              href="#tariffs"
              className="mt-2 inline-flex items-center justify-center rounded-lg px-[22px] py-3 text-lg font-medium text-white transition-colors"
              style={{ backgroundColor: "#de7aff" }}
            >
              Посмотреть тарифы
            </a>
          </div>

          <img
            src={controller}
            alt=""
            aria-hidden="true"
            width={225}
            height={225}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute bottom-0 right-1.5 hidden w-[178px] select-none md:block lg:w-[225px]"
          />
        </div>
      </div>
    </section>
  );
}
