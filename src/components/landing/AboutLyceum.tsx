// «О домашнем лицее Skysmart» — вводный текстовый блок перед форматами обучения.
export function AboutLyceum() {
  return (
    <section aria-labelledby="about-lyceum-title" className="bg-white py-12 sm:py-14">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
          style={{ background: "linear-gradient(135deg,#f4f5f7 0%,#eef0f4 100%)" }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full lg:block"
            style={{ background: "radial-gradient(circle,rgba(0,193,255,0.16) 0%,rgba(0,193,255,0) 70%)" }}
          />
          <div className="relative max-w-3xl">
            <h2
              id="about-lyceum-title"
              className="text-3xl font-bold leading-tight text-[#1b2330] sm:text-4xl"
            >
              О домашнем лицее Skysmart
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#3a414d] sm:text-xl">
              Домашний лицей Skysmart предлагает дистанционное обучение по стандартам ФГОС на
              основании официальной лицензии, что позволяет получить{" "}
              <span className="font-semibold text-[#1b2330]">аттестат государственного образца</span>{" "}
              из любой точки мира, обеспечивая полноценное обучение из-за рубежа. Учебный процесс
              организован через малые классы&nbsp;/ мини-группы, а подготовку к экзаменам ведут
              действующие эксперты ЕГЭ/ОГЭ — это гарантирует высокие результаты ОГЭ и ЕГЭ и
              последующее успешное поступление в вузы. При этом для родителей доступны выгодные
              условия оплаты, включая материнский капитал и налоговый вычет, что делает качественное
              альтернативное образование доступным и юридически защищённым.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
