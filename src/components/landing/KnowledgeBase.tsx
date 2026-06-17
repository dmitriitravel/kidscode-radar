import { useState } from "react";

// «Полезные материалы по онлайн образованию» — база знаний с фильтром по темам.
// Все ссылки присутствуют в DOM (скрытые категории получают класс hidden),
// чтобы материалы были доступны поисковым роботам.
const BASE = "https://homeschooling.skysmart.ru";

interface Article {
  title: string;
  href: string;
}

interface Category {
  label: string;
  items: Article[];
}

const CATEGORIES: Category[] = [
  {
    label: "📚 Формы обучения",
    items: [
      { title: "Что такое домашнее обучение", href: `${BASE}/domashnee-obuchenie` },
      { title: "Как перейти на домашнее обучение", href: `${BASE}/kak-perejti-na-domashnee-obuchenie` },
      { title: "Семейное образование в России", href: `${BASE}/semejnoe-obrazovanie-v-rossii` },
      { title: "Семейное обучение: опыт", href: `${BASE}/semejnoe-obuchenie-lichnyj-opyt` },
      { title: "Дистанционное обучение", href: `${BASE}/chto-takoe-distancionnoe-obuchenie` },
      { title: "Заочное обучение в школе", href: `${BASE}/zaochnoe-obuchenie-v-shkole` },
      { title: "Экстернат в России", href: `${BASE}/eksternat-v-rossii` },
      { title: "Формы обучения на дому", href: `${BASE}/3-zakonnye-formy-obucheniya-na-domu` },
      { title: "Дистанционное обучение для школьников", href: `${BASE}/distancionnoe-obuchenie-dlya-shkolnikov` },
      { title: "Сравнение домашнего и надомного обучения", href: `${BASE}/sravnenie-domashnego-i-nadomnogo-obucheniya` },
      { title: "Типы обучающихся в организациях", href: `${BASE}/tipy-obuchayushihsya-v-obrazovatelnyh-organizaciyah` },
    ],
  },
  {
    label: "🏫 Школьная организация",
    items: [
      { title: "Школьные программы для начальных классов", href: `${BASE}/shkolnye-programmy-dlya-nachalnyh-klassov` },
      { title: "Учебные предметы в 7 классе", href: `${BASE}/uchebnye-predmety-v-7-klasse` },
      { title: "Типы и виды образовательных учреждений", href: `${BASE}/tipy-i-vidy-obrazovatelnyh-uchrezhdenij-v-rossii` },
      { title: "Какие бывают уроки в школе", href: `${BASE}/tipy-i-vidy-urokov` },
      { title: "Углублённое изучение предметов", href: `${BASE}/uglublyonnoe-izuchenie-predmetov-v-shkole` },
      { title: "Индивидуальный план обучения", href: `${BASE}/individualnyj-plan-obucheniya-v-shkole` },
      { title: "Внеклассные мероприятия в школе", href: `${BASE}/vneklassnye-meropriyatiya-v-shkole` },
      { title: "Промежуточная аттестация", href: `${BASE}/promezhutochnaya-attestaciya` },
      { title: "Олимпиады для школьников", href: `${BASE}/olimpiady-dlya-shkolnikov` },
      { title: "Электронный дневник школьника", href: `${BASE}/elektronnyj-dnevnik-shkolnika` },
      { title: "Образцы заявлений в школу", href: `${BASE}/obrazcy-zayavlenij-v-shkolu` },
      { title: "Заявление по семейным обстоятельствам", href: `${BASE}/zayavlenie-po-semejnym-obstoyatelstvam` },
    ],
  },
  {
    label: "🎓 Переходы и адаптация",
    items: [
      { title: "Что изменилось в школьном образовании за 15 лет", href: `${BASE}/chto-izmenilos-v-rossijskom-shkolnom-obrazovanii-za-poslednie-15-let` },
      { title: "Идём в 5 класс", href: `${BASE}/idem-v-5-klass` },
      { title: "Как перевести ребёнка в другую школу", href: `${BASE}/kak-perevesti-rebenka-v-druguyu-shkolu` },
      { title: "Как настроить ребёнка на учёбу после каникул", href: `${BASE}/kak-nastroit-rebenka-na-uchebu-posle-kanikul` },
      { title: "Как выбрать профильное обучение", href: `${BASE}/kak-vybrat-profilnoe-obuchenie-v-starshih-klassah` },
      { title: "1 сентября: идеи", href: `${BASE}/1-sentyabrya-idei` },
      { title: "Какой режим поможет закончить год", href: `${BASE}/kakoi-rezhim-pomozhet-rebenku-zakonchit-god` },
      { title: "Gap year", href: `${BASE}/gap-year` },
      { title: "Как найти друзей на семейном обучении", href: `${BASE}/kak-najti-druzej-na-semejnom-obuchenii` },
      { title: "Всё о профориентации в школе", href: `${BASE}/vse-o-proforientacii-v-shkole-sovety-i-rekomendacii` },
      { title: "Уроки профориентации в школе", href: `${BASE}/uroki-proforientacii-v-shkole` },
    ],
  },
  {
    label: "📝 Учёба и домашние задания",
    items: [
      { title: "Домашние задания на каникулы", href: `${BASE}/domashnie-zadaniya-na-kanikuly` },
      { title: "Как делать домашние задания", href: `${BASE}/kak-delat-domashnie-zadaniya` },
      { title: "Как быстро выучить текст", href: `${BASE}/kak-bystro-viuchit-text-naizust` },
      { title: "Как удержать внимание ребёнка", href: `${BASE}/kak-uderjat-vnimanie-rebenka` },
      { title: "Как оценить прогресс в учёбе", href: `${BASE}/kak-otsenit-progress-v-uchebe` },
      { title: "Методы обучения, которые уже не работают", href: `${BASE}/metodi-obucheniya-kotorie-uzhe-ne-rabotayut` },
      { title: "Приложения для учёбы", href: `${BASE}/top-poleznyh-prilozhenij-dlya-ucheby` },
      { title: "Лучший стул для школьника", href: `${BASE}/luchshij-stul-dlya-shkolnika` },
      { title: "Отношения с репетитором", href: `${BASE}/kak-stroit-otnosheniya-s-repetitorom` },
      { title: "Полезные предметы", href: `${BASE}/poleznye-predmety` },
      { title: "Бесполезные предметы", href: `${BASE}/bespoleznye-predmety` },
      { title: "Как заставить ребёнка учиться", href: `${BASE}/kak-zastavit-rebenka-uchitsya` },
      { title: "Приёмы визуализации", href: `${BASE}/priemi-vizualizatcii` },
      { title: "7 способов не потерять знания", href: `${BASE}/7-sposobov-ne-poteryat-znaniya` },
    ],
  },
  {
    label: "👨‍👩‍👧 Психология ребёнка",
    items: [
      { title: "Что такое школьный буллинг", href: `${BASE}/chto-takoe-shkollnyj-bulling` },
      { title: "Необщительный ребёнок", href: `${BASE}/neobshchitelnuy-rebenok` },
      { title: "Компьютерная зависимость у подростков", href: `${BASE}/kompyuternaya-zavisimost-u-podrostkov` },
      { title: "Что такое синдром отличника", href: `${BASE}/chto-takoe-sindrom-otlichnika` },
      { title: "Как научить ребёнка дружить со сверстниками", href: `${BASE}/kak-nauchit-rebyonka-druzhit-so-sverstnikami` },
      { title: "Как помочь ребёнку справиться со страхами", href: `${BASE}/kak-pomoch-rebyonku-spravitsya-so-svoimi-strahami` },
      { title: "4 причины хулиганства", href: `${BASE}/4-prichiny-huliganstva` },
      { title: "Эмоциональный интеллект в учёбе", href: `${BASE}/emocionalnii-intellekt-v-uchebe` },
      { title: "Не нравятся друзья ребёнка", href: `${BASE}/ne-nravyatsya-druzya-rebenka` },
      { title: "5 хитрых фраз наших детей", href: `${BASE}/5-hitryh-fraz-nashich-detey` },
      { title: "Как критиковать ребёнка", href: `${BASE}/kak-kritikovat-rebenka` },
      { title: "11 причин похвалить ребёнка за учёбу", href: `${BASE}/11-prichin-pohvalit-rebenka-za-uchebu` },
      { title: "Как бороться со стрессом в учёбе", href: `${BASE}/kak-borotsya-so-stressom-v-uchebe` },
      { title: "Как перестать стрессовать из-за учёбы", href: `${BASE}/kak-perestat-stressovat-iz-za-uchebi` },
      { title: "6 принципов комфортной учёбы", href: `${BASE}/6-principov-komfortnoi-ucheby` },
      { title: "Как отдыхают наши дети", href: `${BASE}/kak-otdyhayut-nashi-deti` },
    ],
  },
  {
    label: "🧠 Развитие способностей",
    items: [
      { title: "Развитие мышления у детей", href: `${BASE}/razvitie-mishleniya-u-detei` },
      { title: "Логическая память", href: `${BASE}/logicheskaya-pamyat` },
      { title: "Фильмы по школьной программе", href: `${BASE}/filmy-po-shkolnoi-programme` },
      { title: "Книги будущего предпринимателя", href: `${BASE}/knigi-budushego-predprinimatelya` },
      { title: "12 книг для подростка", href: `${BASE}/12-knig-dlya-podrostka` },
      { title: "Хобби современных детей", href: `${BASE}/hobbi-sovremennih-detei` },
      { title: "Чему научиться за лето", href: `${BASE}/chemu-nauchitsya-za-leto` },
      { title: "6 устаревших навыков", href: `${BASE}/6-ustarevshih-navykov` },
      { title: "Чем заняться на осенних каникулах", href: `${BASE}/chem-zanyatsa-na-osennih-kanikulah` },
      { title: "Как развивать внимание", href: `${BASE}/kak-razvivat-vnimanie` },
      { title: "Как выбрать книгу для ребёнка", href: `${BASE}/kak-vibrat-knigu-dlya-rebenka` },
      { title: "Обучение ребёнка летом", href: `${BASE}/obuchenie-rebyonka-letom` },
      { title: "Ребёнок хочет стать блогером", href: `${BASE}/rebenok-hochet-stat-blogerom` },
    ],
  },
];

export function KnowledgeBase() {
  const [active, setActive] = useState(0);

  return (
    <section id="knowledge" aria-labelledby="knowledge-title" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <div className="container-page">
        <h2 id="knowledge-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Полезные материалы по онлайн образованию
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Темы материалов">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2.5 text-base transition-colors ${
                i === active
                  ? "border-black bg-black text-white"
                  : "border-border bg-white text-black hover:border-black/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {CATEGORIES.map((cat, i) => (
          <ul
            key={cat.label}
            role="tabpanel"
            aria-label={cat.label}
            className={`mt-8 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${i === active ? "grid" : "hidden"}`}
          >
            {cat.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex h-full min-h-[180px] flex-col justify-between rounded-2xl p-5 transition-colors"
                  style={{ backgroundColor: "#f4f4f4" }}
                >
                  <span className="text-lg font-medium leading-snug text-black">{item.title}</span>
                  <span
                    className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-black group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
