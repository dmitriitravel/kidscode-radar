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
      { title: "Что такое домашнее обучение", href: `${BASE}/chto-takoe-domashnee-obuchenie` },
      { title: "Как перейти на домашнее обучение", href: `${BASE}/kak-pereiti-na-domashnee-obuchenie` },
      { title: "Семейное образование в России", href: `${BASE}/semeynoe-obrazovanie-v-rossii` },
      { title: "Семейное обучение: опыт", href: `${BASE}/semeynoe-obuchenie-opyt` },
      { title: "Дистанционное обучение", href: `${BASE}/distancionnoe-obuchenie` },
      { title: "Топ-10 онлайн-школ", href: `${BASE}/top-10-onlayn-shkol` },
      { title: "Заочное обучение в школе", href: `${BASE}/zaochnoe-obuchenie-v-shkole` },
      { title: "Экстернат в России", href: `${BASE}/eksternat-v-rossii` },
      { title: "Формы обучения на дому", href: `${BASE}/formy-obucheniya-na-domu` },
      { title: "Топ школ семейного обучения в Москве", href: `${BASE}/top-shkol-semeynogo-obucheniya-v-moskve` },
      { title: "Стоимость домашнего обучения", href: `${BASE}/stoimost-domashnego-obucheniya` },
      { title: "Отзывы о дистанционных школах", href: `${BASE}/otzyvy-o-distancionnyh-shkolah` },
    ],
  },
  {
    label: "🏫 Школьная организация",
    items: [
      { title: "Как выбрать школу для ребёнка", href: `${BASE}/kak-vybrat-shkolu` },
      { title: "Перевод в другую школу", href: `${BASE}/perevod-v-druguyu-shkolu` },
      { title: "Школьное расписание", href: `${BASE}/shkolnoe-raspisanie` },
      { title: "Аттестация на семейном обучении", href: `${BASE}/attestaciya-na-semeynom-obuchenii` },
      { title: "Что такое прикрепление к школе", href: `${BASE}/prikreplenie-k-shkole` },
      { title: "Документы для перехода", href: `${BASE}/dokumenty-dlya-perehoda` },
    ],
  },
  {
    label: "🎓 Переходы и адаптация",
    items: [
      { title: "Как перейти на семейное обучение", href: `${BASE}/kak-pereiti-na-semeynoe-obuchenie` },
      { title: "Адаптация после перехода", href: `${BASE}/adaptaciya-posle-perehoda` },
      { title: "Смена формата обучения", href: `${BASE}/smena-formata-obucheniya` },
      { title: "Как помочь ребёнку привыкнуть к онлайну", href: `${BASE}/adaptaciya-k-onlaynu` },
      { title: "Первый год на семейном обучении", href: `${BASE}/pervyy-god-na-semeynom-obuchenii` },
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
    ],
  },
  {
    label: "👨‍👩‍👧 Психология ребёнка",
    items: [
      { title: "Как мотивировать ребёнка учиться", href: `${BASE}/kak-motivirovat-rebenka-uchitsya` },
      { title: "Школьная тревожность", href: `${BASE}/shkolnaya-trevozhnost` },
      { title: "Эмоциональное выгорание у школьников", href: `${BASE}/vygoranie-u-shkolnikov` },
      { title: "Как наладить контакт с подростком", href: `${BASE}/kontakt-s-podrostkom` },
      { title: "Как справиться со стрессом перед экзаменом", href: `${BASE}/stress-pered-ekzamenom` },
    ],
  },
  {
    label: "🧠 Развитие способностей",
    items: [
      { title: "Как развить память у ребёнка", href: `${BASE}/kak-razvit-pamyat` },
      { title: "Как развить логическое мышление", href: `${BASE}/logicheskoe-myshlenie` },
      { title: "Как найти талант ребёнка", href: `${BASE}/kak-nayti-talant-rebenka` },
      { title: "Развитие креативности", href: `${BASE}/razvitie-kreativnosti` },
      { title: "Как привить любовь к чтению", href: `${BASE}/lyubov-k-chteniyu` },
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
