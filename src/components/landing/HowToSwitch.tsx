import { Download } from "lucide-react";

// «Как перейти на семейное обучение» — 4 шага + иллюстрация-инструкция.
const ASSET = "https://static.tildacdn.com";
const IMG_PC = `${ASSET}/tild6336-3532-4739-a134-636332373031/Frame_2087331475.png`;
const IMG_MOB = `${ASSET}/tild6638-3635-4734-a637-323731616131/Frame_2087331475.png`;
const INSTRUCTION_URL =
  "https://study.skysmart.ru/how-to-start-homeschooling?source_type=search&manager=seoteam&utm_medium=organic&utm_term=generic&utm_content=seohsguide";

const STEPS = [
  "Отправьте заявление о переходе в департамент образования по вашему региону",
  "Заберите документы из старой школы",
  "Выберите школу, где ребёнок будет проходить аттестацию, и дождитесь зачисления (на тарифах с прикреплением мы помогаем это сделать)",
  "Начните обучение",
];

export function HowToSwitch() {
  return (
    <section aria-labelledby="howto-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <div
          className="grid items-center overflow-hidden rounded-3xl text-white lg:grid-cols-2"
          style={{ background: "linear-gradient(115deg,#0d0813 0%,#241043 45%,#7a2cb8 100%)" }}
        >
          <div className="p-7 sm:p-10 lg:p-12">
            <h2 id="howto-title" className="text-3xl font-bold leading-tight sm:text-4xl">
              Как перейти на семейное обучение
            </h2>
            <ol className="mt-7 space-y-4">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-sm font-semibold text-white"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base leading-snug text-white/90">{step}</span>
                </li>
              ))}
            </ol>
            <a
              href={INSTRUCTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(180deg,#cf9bff,#a86bf0)" }}
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Скачать инструкцию
            </a>
          </div>

          <div className="flex items-stretch justify-center self-stretch">
            <picture>
              <source media="(min-width:1024px)" srcSet={IMG_PC} />
              <img
                src={IMG_MOB}
                alt="Инструкция по переходу на семейное обучение"
                width={1120}
                height={928}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
