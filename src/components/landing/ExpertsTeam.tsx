import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

// «За процесс обучения отвечают опытные эксперты» — 3 карточки.
// Первые две ведут на страницу эксперта (новое окно), третья открывает поп-ап.
const CDN = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/experts";

interface Expert {
  role: string;
  description: string;
  name: string;
  imgMobile: string;
  imgDesktop: string;
  href?: string;
}

const EXPERTS: Expert[] = [
  {
    role: "Куратор учебной программы",
    description: "Разрабатывает уроки, на которых детям интересно и не страшно пробовать новое",
    name: "Александра Калинина",
    imgMobile: `${CDN}/expert1-375@2x.png`,
    imgDesktop: `${CDN}/expert1-1024@2x.png`,
    href: "https://homeschooling.skysmart.ru/team/aleksandra",
  },
  {
    role: "Классный руководитель",
    description: "Следит за посещаемостью и успеваемостью, помогает с учёбой и решает вопросы с аттестацией",
    name: "Татьяна Брейкина",
    imgMobile: `${CDN}/expert2-375@2x.png`,
    imgDesktop: `${CDN}/expert2-1024@2x.png`,
    href: "https://homeschooling.skysmart.ru/team/tatyana-brejkina",
  },
  {
    role: "Нейропсихолог",
    description: "Консультирует и помогает, если ребёнок не усваивает материал и быстро теряет внимание",
    name: "Анастасия Бобровская",
    imgMobile: `${CDN}/expert3-375@2x.png`,
    imgDesktop: `${CDN}/expert3-1024@2x.png`,
  },
];

const QualButton = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white ${className}`}
    style={{ backgroundColor: "#04121b" }}
  >
    Квалификация
    <ArrowRight className="h-4 w-4" />
  </span>
);

function ExpertCard({ expert, onModal }: { expert: Expert; onModal: () => void }) {
  return (
    <article className="relative overflow-hidden rounded-[24px] bg-secondary/40">
      <img
        src={expert.imgDesktop}
        srcSet={`${expert.imgMobile} 768w, ${expert.imgDesktop} 1024w`}
        sizes="(max-width: 768px) 100vw, 360px"
        alt={expert.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="relative flex min-h-[460px] flex-col p-6 sm:min-h-[500px]">
        <div className="text-center">
          <h3 className="text-2xl font-bold leading-tight text-[#1b2330]">{expert.role}</h3>
          <p className="mx-auto mt-3 max-w-[320px] text-base leading-snug text-[#3a414d]">{expert.description}</p>
        </div>
        <div className="mt-auto flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-medium text-[#1b2330]">{expert.name}</p>
          {expert.href ? (
            <a href={expert.href} target="_blank" rel="noopener noreferrer">
              <QualButton />
            </a>
          ) : (
            <button type="button" onClick={onModal} aria-haspopup="dialog">
              <QualButton />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ExpertsTeam() {
  const [open, setOpen] = useState(false);

  return (
    <section aria-labelledby="experts-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <h2 id="experts-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          За процесс обучения отвечают опытные эксперты
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {EXPERTS.map((expert) => (
            <ExpertCard key={expert.name} expert={expert} onModal={() => setOpen(true)} />
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Анастасия Бобровская"
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-4">
              <img
                src={`${CDN}/expert2-avatar.png`}
                alt="Анастасия Бобровская"
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-bold text-[#1b2330]">Анастасия Бобровская</p>
                <span className="mt-1 inline-block rounded-md bg-muted px-2.5 py-1 text-sm text-foreground/70">
                  Нейропсихолог
                </span>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-base leading-snug text-[#3a414d]">
              <li className="flex gap-2">
                <span aria-hidden="true" style={{ color: "#ff9e00" }}>•</span>
                8 лет занимается коррекционно-развивающим обучением и детской реабилитацией
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" style={{ color: "#ff9e00" }}>•</span>
                Работает с детьми от 4 лет по направлениям: нейропсихологическая диагностика и
                коррекция нарушений познавательных процессов (в т.ч. ЗПР, СДВГ), преодоление
                трудностей в обучении
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1SCnIpyzr-NCEQNu7ZIjrYZWs6-6cbRUn/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-medium text-[#1b2330] hover:opacity-80"
            >
              Дипломы
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
