// «Наша образовательная модель одобрена официально» — адаптивный блок из 3 карточек.
// ПК — в ряд (средняя карточка выделена «вымпелом»), мобильные — стопкой.
const LICENSE_ICON =
  "https://static.tildacdn.com/tild6466-6538-4064-a162-363266663635/icon_container_1_1.png";
const FGOS_LOGO =
  "https://static.tildacdn.com/tild3864-3835-4336-b839-383665626231/fgos_2.png";
const VSHE_LOGO =
  "https://static.tildacdn.com/tild3365-3466-4339-a538-356132376435/fgos_2_1.png";

function OpenLink({ href, color }: { href: string; color: "orange" | "purple" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-2 font-semibold text-foreground"
    >
      Открыть
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style={{ backgroundColor: color === "orange" ? "#f59e0b" : "#b45cf0" }}
        aria-hidden="true"
      >
        ›
      </span>
    </a>
  );
}

export function ApprovalOfficial() {
  return (
    <section
      id="approval"
      aria-labelledby="appr-title"
      className="scroll-mt-24 bg-white py-14"
    >
      <div className="container-page">
        <h2
          id="appr-title"
          className="mx-auto mb-10 max-w-2xl text-center text-3xl font-bold leading-tight sm:text-4xl"
        >
          Онлайн-школа с официальным аттестатом от государства
        </h2>

        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          {/* Лицензия */}
          <div
            className="flex flex-1 flex-col items-center gap-4 rounded-3xl p-8 text-center md:min-h-[300px]"
            style={{ background: "linear-gradient(180deg,#fcefd6,#f8e3b9)" }}
          >
            <img
              src={LICENSE_ICON}
              alt=""
              aria-hidden="true"
              width={88}
              height={88}
              loading="lazy"
              decoding="async"
              className="h-[88px] w-[88px]"
            />
            <p className="text-lg font-semibold leading-snug text-foreground">
              Лицензия от Департамента образования
            </p>
            <OpenLink
              href="https://legal.skyengforbusiness.ru/doc/view/https://skyengforbusiness.ru/edu-license"
              color="orange"
            />
          </div>

          {/* ФГОС — выделенная средняя карточка */}
          <div
            className="flex flex-1 flex-col items-center justify-center gap-4 rounded-3xl bg-white p-8 text-center shadow-[0_10px_40px_-16px_rgba(16,36,64,0.18)] md:min-h-[368px] md:pb-20 md:[clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]"
          >
            <span className="inline-flex items-center rounded-full bg-white px-7 py-3.5 shadow-[0_6px_18px_-8px_rgba(16,36,64,0.25)]">
              <img src={FGOS_LOGO} alt="ФГОС" width={82} height={28} loading="lazy" decoding="async" className="h-7 w-auto" />
            </span>
            <p className="text-lg font-semibold leading-snug text-foreground">
              Проводим уроки с учётом ФГОС и требований к аттестации
            </p>
          </div>

          {/* НИУ ВШЭ */}
          <div
            className="flex flex-1 flex-col items-center gap-4 rounded-3xl p-8 text-center md:min-h-[300px]"
            style={{ background: "linear-gradient(180deg,#f4ecfc,#ead7f6)" }}
          >
            <span className="inline-flex items-center rounded-full bg-white px-7 py-3.5 shadow-[0_6px_18px_-8px_rgba(16,36,64,0.25)]">
              <img src={VSHE_LOGO} alt="ВШЭ" width={61} height={28} loading="lazy" decoding="async" className="h-7 w-auto" />
            </span>
            <p className="text-lg font-semibold leading-snug text-foreground">
              Программа разработана НИУ ВШЭ
            </p>
            <OpenLink href="https://ioe.hse.ru/skyeng/" color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
