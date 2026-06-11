// «Вы получите аттестат государственного образца» — адаптивный блок.
const CERT_BASE =
  "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/certificate";

const STEPS = [
  "Выберите тариф с аттестацией",
  "Оформите документы и дождитесь зачисления от школы-партнёра",
  "Сдайте промежуточные аттестации онлайн",
  "Сдайте очно государственную итоговую аттестацию (ОГЭ, ЕГЭ) в аккредитованной школе-партнёре",
  "Заберите аттестат",
];

export function CertificateBlock() {
  return (
    <section id="diploma" aria-labelledby="cert-title" className="scroll-mt-24 bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <h2 id="cert-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Вы получите аттестат государственного образца
        </h2>

        <div className="mt-10 grid overflow-hidden rounded-[32px] bg-white md:grid-cols-2">
          <div className="flex flex-col p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl font-medium text-black sm:text-3xl">Что для этого нужно:</h3>

            <ol className="mt-6 space-y-4">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-base text-black" style={{ backgroundColor: "#f4f4f4" }}>
                    {i + 1}
                  </span>
                  <span className="text-base text-black sm:text-lg">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-4 flex items-start gap-2 rounded-xl p-4" style={{ backgroundColor: "#fff2e0" }}>
              <svg className="mt-0.5 h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 3v18M5 4h11l-2 3 2 3H5" stroke="#ff9e00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-base text-black sm:text-lg">
                Менеджеры лицея помогут подать документы и будут сопровождать вас от заявки до
                получения аттестата
              </p>
            </div>

            <a
              href="#tariffs"
              className="btn-dark mt-8 inline-flex items-center justify-center self-start rounded-lg px-6 py-3 font-semibold"
            >
              Подобрать тариф
            </a>
          </div>

          <div className="relative min-h-[280px] overflow-hidden md:min-h-0">
            <picture>
              <source media="(min-width:768px)" srcSet={`${CERT_BASE}/image-1024.png 1x, ${CERT_BASE}/image-1024@2x.png 2x`} />
              <img
                src={`${CERT_BASE}/image-375.png`}
                srcSet={`${CERT_BASE}/image-375.png 1x, ${CERT_BASE}/image-375@2x.png 2x`}
                alt="Аттестат государственного образца"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
