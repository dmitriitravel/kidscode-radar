import { useState } from "react";

// «Как проходит обучение в лицее?» — вкладки с переключением, адаптивная вёрстка.
const ICON_CHECK = "https://static.tildacdn.com/tild3535-3730-4331-a331-346563626132/Union.svg";
const ICON_PLAY = "https://static.tildacdn.com/tild6432-3937-4530-b739-313464666135/Play.svg";
const ICON_LABEL = "https://static.tildacdn.com/tild6535-3734-4832-a431-643833336638/Check-Label.svg";

const VIDEO_LESSONS = "https://static.tildacdn.com/vide3564-6362-4635-a136-353139623361/_376_1-ezgifcom-gif-.mp4";
const VIDEO_HOMEWORK = "https://static.tildacdn.com/vide6361-3735-4730-b764-343330376531/_376_1-ezgifcom-gif-.mp4";
const IMG_FORMAT = "https://static.tildacdn.com/tild3963-6562-4939-b035-646336386235/pic_6_1.png";
const IMG_CABINET = "https://static.tildacdn.com/tild3632-3831-4130-a133-613338663635/pic_7_1.png";
const IMG_REPORTS = "https://static.tildacdn.com/tild6162-3330-4232-b538-323836666432/pic_5_1.png";
const IMG_ATTEST = "https://static.tildacdn.com/tild3361-6435-4361-a261-646666666466/pic_8_1.png";

const TABS = [
  "Уроки",
  "Формат занятий",
  "Личный кабинет",
  "Отчёты об учёбе",
  "Домашнее задание",
  "Аттестация",
];

function Media({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[240px] overflow-hidden rounded-b-[16px] md:min-h-0 md:rounded-bl-none md:rounded-br-[32px]">
      {children}
    </div>
  );
}

function Video({ src }: { src: string }) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function Img({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-left-top"
    />
  );
}

const PANELS = [
  // 0 — Уроки
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Уроки</h3>
      <p className="mt-4 text-base text-black/50 sm:text-lg">
        Преподаватель объясняет тему на виртуальной доске, а ученики закрепляют материал в
        интерактивных заданиях и получают баллы. Преподаватель видит статистику по каждому
        ребёнку и сразу понимает, кому нужно дополнительное объяснение
      </p>
      <div className="mt-auto flex flex-col gap-2 pt-6">
        <span className="flex items-center gap-2 rounded-2xl px-4 py-3.5 text-sm text-white sm:text-base" style={{ backgroundColor: "#ffb53d" }}>
          <img src={ICON_CHECK} alt="" width={16} height={16} /> 2–5 уроков с учителями ежедневно
        </span>
        <span className="flex items-center gap-2 rounded-2xl px-4 py-3.5 text-sm text-white sm:text-base" style={{ backgroundColor: "#ff9e00" }}>
          <img src={ICON_PLAY} alt="" width={16} height={16} /> Любой урок можно пересмотреть в записи
        </span>
      </div>
    </>
  ),
  // 1 — Формат занятий
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Формат занятий</h3>
      <p className="mt-4 text-base text-black sm:text-lg">Вебинары с активным участием</p>
      <p className="mt-2 text-base text-black/50 sm:text-lg">
        Ребёнок слушает урок в прямом эфире, задаёт вопросы и общается с одноклассниками в чате,
        который модерируют помощники преподавателя
      </p>
      <p className="mt-4 text-base text-black sm:text-lg">Групповые уроки по видеосвязи</p>
      <p className="mt-2 text-base text-black/50 sm:text-lg">
        Ребёнок подключается с видео и общается голосом. Если нужно, камеру можно отключить:
        строгих требований нет. Обычно на занятиях в группе около 8 человек, максимум — 12
      </p>
    </>
  ),
  // 2 — Личный кабинет
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Личный кабинет</h3>
      <p className="mt-4 text-base text-black/50 sm:text-lg">
        Всё, что нужно для учёбы, находится в одном месте, в кабинете ученика. Там вы найдёте
        расписание занятий, домашки, конспекты, записи прошедших уроков, а также теорию по
        предмету, чтобы легко повторять её
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-lg px-2.5 py-1.5 text-sm text-black/60" style={{ backgroundColor: "#f4f4f4" }}>доступ 24/7</span>
        <span className="rounded-lg px-2.5 py-1.5 text-sm text-black/60" style={{ backgroundColor: "#f4f4f4" }}>с любого устройства</span>
      </div>
    </>
  ),
  // 3 — Отчёты об учёбе
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Отчёты об учёбе</h3>
      <p className="mt-4 text-base text-black/50 sm:text-lg">
        Каждую неделю присылаем родителям отчёт: сколько вебинаров ребёнок посетил на этой неделе,
        сколько домашек сделал и какие баллы получил
      </p>
      <div className="mt-6 rounded-2xl p-4" style={{ backgroundColor: "#f4f4f4" }}>
        <p className="text-base text-black sm:text-lg">
          По учебным вопросам с вами на связи классный руководитель:
        </p>
        <ul className="mt-4 space-y-2">
          {["отчитывается о прогрессе", "напоминает о занятиях", "отвечает на вопросы детей и родителей"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-base text-black/64 sm:text-lg">
              <img src={ICON_LABEL} alt="" width={24} height={24} className="shrink-0" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  ),
  // 4 — Домашнее задание
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Домашнее задание</h3>
      <p className="mt-4 text-base text-black sm:text-lg">Ручная проверка</p>
      <p className="mt-2 text-base text-black/50 sm:text-lg">
        Часть домашних заданий выполняется письменно: ученик фотографирует тетрадь, загружает
        работу, а учитель проверяет и даёт обратную связь
      </p>
      <p className="mt-4 text-base text-black sm:text-lg">Мгновенная проверка</p>
      <p className="mt-2 text-base text-black/50 sm:text-lg">
        Интерактивные упражнения, где система сразу показывает ошибки и правильные ответы,
        фиксирует количество попыток и считает баллы, чтобы отслеживать прогресс ребёнка
      </p>
    </>
  ),
  // 5 — Аттестация
  (
    <>
      <h3 className="text-2xl font-medium text-black sm:text-3xl">Аттестация</h3>
      <div className="mt-5 space-y-4">
        <details className="group" open>
          <summary className="flex cursor-pointer items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block text-base text-black sm:text-lg">Промежуточная аттестация</span>
              <span className="mt-2 inline-block rounded-lg px-2 py-1 text-sm text-black/64" style={{ backgroundColor: "#f4f4f4" }}>5–8 и 10 классы</span>
            </span>
            <svg className="mt-1 h-6 w-6 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 14.086 6.207 8.293 4.793 9.707l6.323 6.323a1.25 1.25 0 0 0 1.768 0l6.323-6.323-1.414-1.414z" fill="currentColor"/></svg>
          </summary>
          <p className="mt-3 text-base text-black/50 sm:text-lg">
            На семейном обучении контрольные и ВПР желательно сдавать каждый год, чтобы
            контролировать знания и прогресс. В тарифах с прикреплением мы не только готовим
            ребёнка к аттестации, но и помогаем пройти её онлайн через школу-партнёра
          </p>
        </details>
        <details className="group">
          <summary className="flex cursor-pointer items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block text-base text-black sm:text-lg">Итоговая аттестация</span>
              <span className="mt-2 inline-block rounded-lg px-2 py-1 text-sm text-black/64" style={{ backgroundColor: "#f4f4f4" }}>9 и 11 классы</span>
            </span>
            <svg className="mt-1 h-6 w-6 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 14.086 6.207 8.293 4.793 9.707l6.323 6.323a1.25 1.25 0 0 0 1.768 0l6.323-6.323-1.414-1.414z" fill="currentColor"/></svg>
          </summary>
          <p className="mt-3 text-base text-black/50 sm:text-lg">
            Это экзамены, итоговое сочинение и собеседование, которые можно сдать только офлайн.
            В тарифах с прикреплением мы берём на себя договорённости со школой, где ребёнок будет
            сдавать ОГЭ и ЕГЭ
          </p>
        </details>
      </div>
      <a
        href="https://study.skysmart.ru/how-to-switch-to-homeschooling"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white"
        style={{ backgroundColor: "#de7aff" }}
      >
        Скачать гайд по аттестации
      </a>
    </>
  ),
];

const MEDIA = [
  <Media key="m0"><Video src={VIDEO_LESSONS} /></Media>,
  <Media key="m1"><Img src={IMG_FORMAT} /></Media>,
  <Media key="m2"><Img src={IMG_CABINET} /></Media>,
  <Media key="m3"><Img src={IMG_REPORTS} /></Media>,
  <Media key="m4"><Video src={VIDEO_HOMEWORK} /></Media>,
  <Media key="m5"><Img src={IMG_ATTEST} /></Media>,
];

export function LyceumProcess() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="lyc-title" className="bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <h2 id="lyc-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Как проходит обучение в лицее?
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Этапы обучения">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="rounded-full px-[18px] py-[11px] text-sm font-medium transition-colors sm:text-base"
              style={
                i === active
                  ? { backgroundColor: "var(--brand-accent)", color: "#fff" }
                  : { backgroundColor: "#ededed", color: "#000" }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {PANELS.map((panel, i) => (
            <div
              key={i}
              role="tabpanel"
              className={`overflow-hidden rounded-[16px] bg-white md:min-h-[520px] md:rounded-[32px] ${
                i === active ? "grid md:grid-cols-2" : "hidden"
              }`}
            >
              <div className="flex flex-col p-6 sm:p-8 md:p-10">{panel}</div>
              {MEDIA[i]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
