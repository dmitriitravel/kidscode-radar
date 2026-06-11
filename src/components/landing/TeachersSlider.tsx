import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

// «Кто преподаёт в лицее» — слайдер карточек преподавателей с поп-ап видео урока.
// Видео урока в исходном коде задано якорями #teacher-N (поп-апы Tilda без прямых URL),
// поэтому в поп-ап встроено демо-видео урока Skysmart.
const LESSON_VIDEO =
  "https://static.tildacdn.com/vide3564-6362-4635-a136-353139623361/_376_1-ezgifcom-gif-.mp4";

interface Teacher {
  name: string;
  subject: string;
  icon: string;
  grades: string;
  bio: string;
  photo: string;
}

const TEACHERS: Teacher[] = [
  {
    name: "Татьяна Терещенко",
    subject: "физика",
    icon: "https://static.tildacdn.com/tild6531-3364-4335-b839-313635663465/Magnet.svg",
    grades: "7–11 классы",
    bio: "Магистр в области ИТ в образовании, преподаватель физики с опытом работы в колледжах и вузах. Ведёт научную работу и разрабатывает проекты, готовит к ОГЭ и ЕГЭ, помогает разобраться со сложными заданиями. Стаж преподавания — 8 лет",
    photo: "https://static.tildacdn.com/tild3533-3866-4930-b738-313730316463/Property_1_Deskyes_1.png",
  },
  {
    name: "Алексей Мелкозеров",
    subject: "информатика",
    icon: "https://static.tildacdn.com/tild6631-3937-4461-b633-363164663732/Code.svg",
    grades: "5–11 классы",
    bio: "Научил 300+ учеников программировать, участвовал в разработке игр с использованием продвинутых технологий. Обучает языку программирования Python, алгоритмам и веб-разработке (языки HTML, CSS, JavaScript). Стаж преподавания — 5 лет",
    photo: "https://static.tildacdn.com/tild3861-6666-4332-b762-623034386130/Property_1_Deskyes_1.png",
  },
  {
    name: "Екатерина Бордун",
    subject: "математика",
    icon: "https://static.tildacdn.com/tild3234-6535-4263-b332-393964656632/Calculator.svg",
    grades: "5–8 классы",
    bio: "Экономист, математик с профильным педагогическим образованием, автор нескольких сотен заданий по математике. Стаж преподавания — 12 лет",
    photo: "https://static.tildacdn.com/tild6434-6364-4464-a262-356432363264/Property_1_Deskyes_1.png",
  },
  {
    name: "Константин Нестеров",
    subject: "биология",
    icon: "https://static.tildacdn.com/tild6437-3732-4562-b664-393133353833/Leaf.svg",
    grades: "5–11 классы",
    bio: "Магистр биотехнологии, выпускник ХТИ УрФУ. Автор курса «Биология с нуля», методист курса подготовки к ЕГЭ по биологии и программы Домашнего лицея. Стаж преподавания — 9 лет",
    photo: "https://static.tildacdn.com/tild3363-6662-4535-a639-333733653731/Property_1_Deskyes_1.png",
  },
  {
    name: "Арина Матвеева",
    subject: "география",
    icon: "https://static.tildacdn.com/tild6535-3566-4037-a235-613630646234/Globe.svg",
    grades: "5–11 классы",
    bio: "Выпускница РГПУ им. А. И. Герцена с двумя красными дипломами, учитель первой квалификационной категории. Автор курса подготовки к ОГЭ и ЕГЭ, предметный методист и методист СПО. Более 7 лет преподаёт географию и готовит учеников к экзаменам",
    photo: "https://static.tildacdn.com/tild6532-6135-4532-b837-303635363066/Property_1_Deskyes_1.png",
  },
  {
    name: "Маргарита Могилат",
    subject: "литература",
    icon: "https://static.tildacdn.com/tild3136-6664-4330-b065-373233393161/Book.svg",
    grades: "5–11 классы",
    bio: "Филолог-литературовед, выпускница Государственного института русского языка им. А. С. Пушкина. Стаж преподавания — 5 лет",
    photo: "https://static.tildacdn.com/tild3937-6638-4433-b431-346237646663/Property_1_Deskyes_1.png",
  },
  {
    name: "Иван Лобов",
    subject: "история",
    icon: "https://static.tildacdn.com/tild3831-3534-4835-a364-656464303765/Column.svg",
    grades: "5–11 классы",
    bio: "Региональный эксперт проверки ОГЭ/ЕГЭ, преподаватель обществознания и истории, магистр управления образованием. Учитель первой квалификационной категории, участник конкурса «Учитель года». Стаж преподавания — 9 лет",
    photo: "https://static.tildacdn.com/tild6135-6464-4932-b265-626261393063/Property_1_Deskyes_1.png",
  },
  {
    name: "Дарья Афанасьева",
    subject: "обществознание",
    icon: "https://static.tildacdn.com/tild6635-6633-4239-a466-383665643534/Social_Studies.svg",
    grades: "6–11 классы",
    bio: "Выпускница НИУ ВШЭ, юрист, педагог, автор научных работ в области юриспруденции, сдала ЕГЭ на 100 баллов и знает экзамен изнутри. Стаж преподавания и подготовки к ЕГЭ по обществознанию — 9 лет",
    photo: "https://static.tildacdn.com/tild6666-3931-4666-b032-323266373466/Property_1_Deskyes.png",
  },
  {
    name: "Богдан Шмыков",
    subject: "химия",
    icon: "https://static.tildacdn.com/tild6465-3061-4138-b935-306135333835/Chemistry.svg",
    grades: "8–11 классы",
    bio: "Выпускник химфака МГУ. Стаж преподавания — 6 лет, средний балл учеников на ЕГЭ — 90",
    photo: "https://static.tildacdn.com/tild3435-3966-4437-b438-356437373830/Property_1_Deskyes_1.png",
  },
  {
    name: "Эльмаз Умерова",
    subject: "английский язык",
    icon: "https://static.tildacdn.com/tild6434-3233-4730-b538-353234653331/Flag_Eng.svg",
    grades: "9–11 классы",
    bio: "Магистр филологии, владеет английским на высоком уровне (Advanced), сдала экзамен IELTS на 8 баллов. Ведёт уроки с опорой на международные стандарты преподавания, готовит учеников к ОГЭ, ЕГЭ и помогает заговорить на английском более 7 лет",
    photo: "https://static.tildacdn.com/tild3761-3162-4464-b762-633132613239/Property_1_Deskyes_1.png",
  },
];

export function TeachersSlider() {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const count = TEACHERS.length;
  const t = TEACHERS[index];

  return (
    <section aria-labelledby="teachers-title" className="bg-secondary/60 py-14 sm:py-16">
      <div className="container-page">
        <h2 id="teachers-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Кто преподаёт в лицее
        </h2>

        <div className="mt-8 flex flex-col-reverse overflow-hidden rounded-[24px] bg-white md:grid md:min-h-[430px] md:grid-cols-2 md:rounded-[32px]">
          <div className="flex flex-col p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl font-medium text-black sm:text-3xl">{t.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-lg px-2.5 py-1.5 text-sm text-black/64" style={{ backgroundColor: "#f4f4f4" }}>{t.grades}</span>
              <span className="rounded-lg px-2.5 py-1.5 text-sm text-black/64" style={{ backgroundColor: "#f4f4f4" }}>вебинары</span>
            </div>
            <p className="mt-4 text-base leading-snug text-black/50 sm:text-lg">{t.bio}</p>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="mt-auto inline-flex w-full items-center justify-center gap-2 self-start rounded-xl px-6 py-3.5 text-base font-semibold text-white sm:w-auto"
              style={{ backgroundColor: "#04121b" }}
            >
              <Play className="h-4 w-4 fill-current" />
              Посмотреть урок
            </button>
          </div>

          <div className="relative min-h-[240px] overflow-hidden md:min-h-0">
            <span
              className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white"
              style={{ backgroundColor: "#ff6ec7" }}
            >
              <img src={t.icon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
              {t.subject}
            </span>
            <img
              src={t.photo}
              alt={t.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Предыдущий преподаватель"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-muted-foreground">{index + 1} / {count}</span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Следующий преподаватель"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Урок: ${t.name}`}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Закрыть"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>
            <video className="w-full rounded-2xl" controls autoPlay playsInline>
              <source src={LESSON_VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
