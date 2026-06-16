// Закрывающий футер: логотип, колонки ссылок, соцсети и юридическая информация.
const LOGO = "https://cdn-user84060.skyeng.ru/uploads/logo-skysmart-66b5fff6c9a37571301329.svg";
const SOC = "https://static.tildacdn.com";

const COL1 = [
  { label: "8 (800) 555-45-22", href: "tel:88005554522" },
  { label: "О школе", href: "https://skysmart.ru/about-school" },
  { label: "Процесс обучения", href: "https://skysmart.ru/process" },
  { label: "Репетиторы", href: "https://skysmart.ru/repetitors" },
  { label: "Цены", href: "https://skysmart.ru/price" },
  { label: "Все курсы для детей", href: "https://skysmart.ru/courses" },
  { label: "Подарочные сертификаты", href: "https://skysmart.ru/courses" },
  { label: "Партнёрская программа", href: "https://learn.skyeng.ru/partners/" },
];

const COL2 = {
  title: "Поучиться",
  links: [
    { label: "Skysmart Класс", href: "https://edu.skysmart.ru/student" },
    { label: "Английский для взрослых", href: "https://skyeng.ru/adults" },
    { label: "Skysmart Решения", href: "https://resh.skysmart.ru/" },
    { label: "Обучение профессиям в Skypro", href: "https://sky.pro/" },
  ],
};

const COL3 = {
  title: "Полезности",
  links: [
    { label: "Статьи", href: "https://skysmart.ru/articles" },
    { label: "Задания по английскому", href: "https://skysmart.ru/lessons/angliyskiy-yazyk" },
    { label: "Варианты ВПР", href: "https://skysmart.ru/vpr" },
    { label: "Преподавателям", href: "https://job.skyeng.ru/prepodavatelyam" },
    { label: "Портал для учителей", href: "https://skytea.ch/skyeng-base" },
    { label: "Отзывы о Skysmart", href: "https://skysmart.ru/reviews" },
    { label: "Контакты", href: "https://skysmart.ru/contacts" },
    { label: "Карта сайта", href: "https://skysmart.ru/sitemap" },
  ],
};

const SOCIAL_PARENTS = [
  { alt: "ВКонтакте", href: "https://vk.com/skysmart_parents", icon: `${SOC}/tild3437-3866-4062-b061-666565633263/Social_icon.png` },
  { alt: "YouTube", href: "https://www.youtube.com/c/SkysmartParents/videos", icon: `${SOC}/tild6333-3634-4439-b233-353862663932/Social_icon-1.png` },
  { alt: "Дзен", href: "https://dzen.ru/skysmart", icon: `${SOC}/tild3564-6333-4565-a463-633763383933/Social_icon-2.png` },
  { alt: "Telegram", href: "https://t.me/+4ubFiHfPhbw4NjAy", icon: `${SOC}/tild3932-6537-4336-b233-653538393463/Social_icon-3.png` },
];

const SOCIAL_STUDENTS = [
  { alt: "ВКонтакте", href: "https://vk.com/skysmart_pro_teen", icon: `${SOC}/tild3437-3866-4062-b061-666565633263/Social_icon.png` },
  { alt: "YouTube", href: "https://www.youtube.com/channel/UCASzErcyyrm_7hCB31F1oUQ/featured", icon: `${SOC}/tild6333-3634-4439-b233-353862663932/Social_icon-1.png` },
  { alt: "TikTok", href: "https://www.tiktok.com/@skysmart_school", icon: `${SOC}/tild3765-6434-4436-b931-656437333065/Social_icon.png` },
];

function SocialRow({ title, items }: { title: string; items: typeof SOCIAL_PARENTS }) {
  return (
    <div>
      <p className="text-base font-medium text-foreground">{title}</p>
      <div className="mt-3 flex gap-3">
        {items.map((s) => (
          <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.alt}>
            <img src={s.icon} alt={s.alt} width={36} height={36} loading="lazy" decoding="async" className="h-9 w-9" />
          </a>
        ))}
      </div>
    </div>
  );
}

const muted = "text-foreground/50 transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#f4f5f6" }}>
      <div className="container-page">
        <div className="rounded-t-[28px] bg-white px-6 pb-10 pt-10 sm:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_auto]">
            {/* Колонка 1 — логотип + основные ссылки */}
            <div>
              <img src={LOGO} alt="Skysmart" width={176} height={50} loading="lazy" decoding="async" className="h-[34px] w-auto" />
              <ul className="mt-6 space-y-2.5 text-base">
                {COL1.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-foreground transition-colors hover:text-foreground/70">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 2 — Поучиться */}
            <div>
              <p className="text-base font-medium text-foreground">{COL2.title}</p>
              <ul className="mt-4 space-y-2.5 text-base">
                {COL2.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={muted}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3 — Полезности */}
            <div>
              <p className="text-base font-medium text-foreground">{COL3.title}</p>
              <ul className="mt-4 space-y-2.5 text-base">
                {COL3.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={muted}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 4 — Соцсети */}
            <div className="space-y-7">
              <SocialRow title="Соцсети для родителей" items={SOCIAL_PARENTS} />
              <SocialRow title="Соцсети для школьников" items={SOCIAL_STUDENTS} />
            </div>
          </div>

          <hr className="my-9 h-px border-0 bg-foreground/15" />

          <div className="grid grid-cols-1 gap-8 text-[15px] text-foreground/50 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p>
                ОАНО ДПО «СКАЕНГ», 109004, г. Москва, вн. тер. г. муниципальный округ Таганский, ул. Александра
                Солженицына, д. 23А, стр. 4, этаж/пом. 1/III, ком. 1
              </p>
              <p>
                <a href="https://skyengforbusiness.ru/edu-license" target="_blank" rel="noopener noreferrer" className={muted}>
                  Лицензия на осуществление образовательной деятельности №Л035‑01298-77/00181469 от 06.08.2019
                </a>
              </p>
            </div>

            <ul className="space-y-3">
              <li>
                <a href="https://legal.skysmart.ru/doc/view/terms_of_use_SKM_ANO_rus" target="_blank" rel="noopener noreferrer" className={muted}>
                  Условия использования
                </a>
              </li>
              <li>
                <a href="https://skyengforbusiness.ru/organization.html" target="_blank" rel="noopener noreferrer" className={muted}>
                  Сведения об образовательной организации
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <a href="https://legal.skysmart.ru/doc/view/offerunfdkidsanorus" target="_blank" rel="noopener noreferrer" className={muted}>
                  Оферта
                </a>
              </li>
              <li>
                <a href="https://legal.skyeng.ru/doc/view/privacypolicyanorus" target="_blank" rel="noopener noreferrer" className={muted}>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="https://legal.skyeng.ru/doc/view/Personal_Data_Processors_ANO_June_2023" target="_blank" rel="noopener noreferrer" className={muted}>
                  Обработчики персональных данных
                </a>
              </li>
            </ul>

            <div className="space-y-4 text-[13px] text-foreground/40">
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/terms?hl=ru" target="_blank" rel="noopener noreferrer" className="underline">
                  Privacy Policy
                </a>{" "}
                and Terms of Service apply
              </p>
              <p>
                Делаем развитие привлекательным
                <br />© Skysmart, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
