import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { ParentConcerns } from "@/components/landing/ParentConcerns";
import { ProgramFeatures } from "@/components/landing/ProgramFeatures";
import { SocialProof } from "@/components/landing/SocialProof";
import { LeadForm } from "@/components/landing/LeadForm";
import { LeadDialog } from "@/components/landing/LeadDialog";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  STATS,
  PLATFORM_TABS,
  TEACHERS,
  EXPERTS,
  TRIAL_FEATURES,
  SCHEDULE_TABS,
  DIPLOMA_STEPS,
  REVIEWS,
  TARIFFS,
  PAYMENT_OPTIONS,
  FAQ_ITEMS,
  KNOWLEDGE_LINKS,
} from "@/data/landing";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{children}</h2>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: "Домашний лицей Skysmart",
      description:
        "Онлайн-школа с аттестатом государственного образца для 5–11 классов: уроки с учителями, расписание, аттестация и сопровождение классного руководителя.",
      url: "https://homeschooling.skysmart.ru/",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.join(" "),
        },
      })),
    },
  ],
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Домашний лицей Skysmart — онлайн-школа с аттестатом [5–11 класс]"
        description="Домашний лицей Skysmart — школьная программа с 5 по 11 класс с учителями, расписанием и аттестатом государственного образца. Уроки на собственной платформе, аттестация, тарифы и поддержка классного руководителя."
        keywords="онлайн школа, домашний лицей, семейное обучение, аттестат государственного образца, обучение на дому, Skysmart, 5-11 класс, аттестация ОГЭ ЕГЭ"
        canonicalUrl="https://homeschooling.skysmart.ru/"
        ogTitle="Домашний лицей Skysmart — онлайн-школа с аттестатом"
        ogDescription="Школьная программа с 5 по 11 класс — с учителями, расписанием и аттестатом государственного образца."
        structuredData={structuredData}
      />

      <Header />

      <main>
        <Hero />

        <PromoBanner />

        <SocialProof />

        <ParentConcerns />

        <ProgramFeatures />

        {/* Статы / достижения */}
        <section aria-labelledby="stats-title" className="py-16 sm:py-20">
          <div className="container-page">
            <h2 id="stats-title" className="text-3xl font-bold sm:text-4xl">
              Онлайн-школа с аттестатом
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl bg-secondary p-6 shadow-card"
                >
                  <div
                    className="text-4xl font-bold"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Одобрено Минобразования / НИУ ВШЭ */}
        <section id="approval" aria-labelledby="approval-title" className="scroll-mt-24 py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="approval-title">
                Наша модель обучения одобрена Министерством образования
              </span>
            </SectionTitle>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-secondary p-7 shadow-card">
                <h3 className="text-xl font-semibold">
                  Программа разработана НИУ ВШЭ
                </h3>
                <p className="mt-3 text-muted-foreground">
                  С учётом знаний и опыта научных сотрудников Института образования
                  Высшей школы экономики. Мы изучили опыт более 100 тысяч детей и
                  взрослых, чтобы максимизировать вовлечённость, мотивацию и прогресс
                  в учёбе.
                </p>
                <a
                  href="#platform"
                  className="mt-4 inline-block font-semibold"
                  style={{ color: "var(--brand-accent-active)" }}
                >
                  Посмотреть информацию о кафедре →
                </a>
              </div>
              <div className="rounded-2xl bg-secondary p-7 shadow-card">
                <h3 className="text-xl font-semibold">
                  Проводим уроки с учётом ФГОС и требований к аттестации
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Образовательная лицензия от Минобразования. Уроки соответствуют
                  федеральным государственным образовательным стандартам.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Платформа (табы) */}
        <section
          id="platform"
          aria-labelledby="platform-title"
          className="scroll-mt-24 bg-secondary/60 py-16 sm:py-20"
        >
          <div className="container-page">
            <SectionTitle>
              <span id="platform-title">
                Мы ведём уроки на собственной платформе
              </span>
            </SectionTitle>
            <Tabs defaultValue={PLATFORM_TABS[0].id} className="mt-10">
              <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                {PLATFORM_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-xl border border-border bg-white px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {PLATFORM_TABS.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-6">
                  <div className="rounded-2xl bg-white p-7 shadow-card">
                    <h3 className="text-xl font-semibold">{tab.title}</h3>
                    <p className="mt-3 text-muted-foreground">{tab.text}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Учителя */}
        <section aria-labelledby="teachers-title" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="teachers-title">Кто преподаёт в лицее</span>
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Уроки проводят опытные педагоги из ведущих школ России, эксперты ЕГЭ,
              победители всероссийских конкурсов. Только 5 из 100 кандидатов проходят
              конкурсный отбор.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TEACHERS.map((teacher) => (
                <div key={teacher.name} className="rounded-2xl bg-secondary p-6 shadow-card">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                    aria-hidden="true"
                  >
                    {teacher.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{teacher.name}</h3>
                  {"role" in teacher && teacher.role ? (
                    <p className="text-sm font-medium" style={{ color: "var(--brand-accent-active)" }}>
                      {teacher.role}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm text-muted-foreground">{teacher.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Подбор формата (форма) */}
        <section aria-labelledby="format-title" className="bg-secondary/60 py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle>
                <span id="format-title">Подберём формат обучения для ребёнка</span>
              </SectionTitle>
              <p className="mt-4 text-muted-foreground">
                И зафиксируем лучшую цену на 2026/27 учебный год.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Покажем, как проходят уроки в нашей школе",
                  "Расскажем про учебную программу и аттестацию",
                  "Поможем с документами для зачисления",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--brand-accent)" }}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold">Хочу на консультацию</h3>
              <div className="mt-4">
                <LeadForm submitLabel="Хочу на консультацию" />
              </div>
            </div>
          </div>
        </section>

        {/* Эксперты */}
        <section aria-labelledby="experts-title" className="py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="experts-title">
                За процесс обучения отвечают опытные эксперты
              </span>
            </SectionTitle>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {EXPERTS.map((expert) => (
                <div key={expert.name} className="rounded-2xl bg-secondary p-6 shadow-card">
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-accent-active)" }}>
                    {expert.role}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{expert.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{expert.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-muted-foreground">
              Помогаем не только детям, но и родителям. Сопровождаем от зачисления до
              аттестации, не оставляем один на один с вопросами и помогаем, даже если
              сроки уже прошли, а с документами есть проблемы.
            </p>
          </div>
        </section>

        {/* Бесплатный период */}
        <section
          id="trial"
          aria-labelledby="trial-title"
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="container-page">
            <div
              className="grid grid-cols-1 gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-2"
              style={{ backgroundColor: "var(--brand-accent)" }}
            >
              <div className="text-white">
                <h2 id="trial-title" className="text-3xl font-bold sm:text-4xl">
                  Попробуйте 7 дней учёбы в лицее бесплатно
                </h2>
                <ul className="mt-6 space-y-3">
                  {TRIAL_FEATURES.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
                <h3 className="text-xl font-semibold">Начать учиться бесплатно</h3>
                <div className="mt-4">
                  <LeadForm submitLabel="Начать учиться бесплатно" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Расписание (табы) */}
        <section aria-labelledby="schedule-title" className="bg-secondary/60 py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="schedule-title">
                Расписание устроено так, чтобы ребёнок мог всё успевать
              </span>
            </SectionTitle>
            <Tabs defaultValue={SCHEDULE_TABS[0].id} className="mt-10">
              <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                {SCHEDULE_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-xl border border-border bg-white px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {SCHEDULE_TABS.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-6">
                  <div className="rounded-2xl bg-white p-7 shadow-card">
                    <p className="text-sm font-semibold" style={{ color: "var(--brand-accent-active)" }}>
                      Тариф: Профильный IT
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Пример расписания занятий 7-го класса
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      Ринат собирается в IT и увлекается программированием —
                      расписание подобрано так, чтобы оставалось время на любимое
                      дело и дополнительные занятия.
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Аттестат */}
        <section
          id="diploma"
          aria-labelledby="diploma-title"
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="container-page">
            <SectionTitle>
              <span id="diploma-title">
                Вы получите аттестат государственного образца
              </span>
            </SectionTitle>
            <p className="mt-4 text-muted-foreground">Что для этого нужно:</p>
            <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {DIPLOMA_STEPS.map((step, i) => (
                <li key={step} className="rounded-2xl bg-secondary p-6 shadow-card">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full font-bold text-white"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <LeadDialog triggerLabel="Выбрать тариф" />
            </div>

            <div className="mt-10 rounded-2xl bg-secondary p-7 shadow-card">
              <h3 className="text-xl font-semibold">
                Как перейти на семейное обучение
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Скачайте инструкцию и получите шаблоны заявлений с рекомендациями по
                переходу и адаптации ребёнка.
              </p>
              <div className="mt-4">
                <LeadDialog
                  triggerLabel="Скачать инструкцию"
                  title="Скачать инструкцию"
                  description="Оставьте контакты — пришлём инструкцию и шаблоны заявлений."
                  submitLabel="Получить инструкцию"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section aria-labelledby="reviews-title" className="bg-secondary/60 py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="reviews-title">
                Семьи по всему миру доверяют нам образование детей
              </span>
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Тысячи учеников уже создают своё будущее с нами. 80% учеников и
              родителей готовы рекомендовать нас своим друзьям и близким.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {REVIEWS.map((review) => (
                <figure key={review.name} className="rounded-2xl bg-white p-6 shadow-card">
                  <blockquote className="text-muted-foreground">
                    {review.text}
                  </blockquote>
                  <figcaption className="mt-4 font-semibold">{review.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Тарифы */}
        <section
          id="tariffs"
          aria-labelledby="tariffs-title"
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="container-page">
            <SectionTitle>
              <span id="tariffs-title">Выбирайте подходящий тариф</span>
            </SectionTitle>
            <p className="mt-4 text-muted-foreground">
              Со скидкой −20% на новый учебный год.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TARIFFS.map((tariff) => (
                <div
                  key={tariff.name}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{tariff.name}</h3>
                    {tariff.badge ? (
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: "var(--brand-accent)" }}
                      >
                        {tariff.badge}
                      </span>
                    ) : null}
                  </div>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    {tariff.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--brand-accent)" }}
                          aria-hidden="true"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <p className="text-sm text-muted-foreground line-through">
                      {tariff.oldPrice}
                    </p>
                    <p className="text-lg font-bold">{tariff.price}</p>
                    <p className="text-xs text-muted-foreground">{tariff.note}</p>
                  </div>
                  <div className="mt-5">
                    <LeadDialog
                      triggerLabel="Выбрать"
                      triggerClassName="btn-accent inline-flex h-11 w-full items-center justify-center rounded-xl text-base font-semibold"
                      title={`Тариф «${tariff.name}»`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <LeadDialog
                triggerLabel="Подробный состав тарифов"
                triggerClassName="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-white px-6 py-3 text-base font-semibold transition-colors hover:border-foreground/30"
                title="Подробный состав тарифов"
              />
            </div>
          </div>
        </section>

        {/* Оплата */}
        <section aria-labelledby="payment-title" className="bg-secondary/60 py-16 sm:py-20">
          <div className="container-page">
            <SectionTitle>
              <span id="payment-title">
                Оплачивайте учёбу ребёнка без вреда для семейного бюджета
              </span>
            </SectionTitle>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {PAYMENT_OPTIONS.map((opt) => (
                <div key={opt.title} className="rounded-2xl bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold">{opt.title}</h3>
                  <p className="mt-2 text-muted-foreground">{opt.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Консультация */}
        <section aria-labelledby="consult-title" className="py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle>
                <span id="consult-title">
                  Узнайте больше о школе на бесплатной консультации
                </span>
              </SectionTitle>
              <ul className="mt-6 space-y-3">
                {[
                  "Покажем, как проходят уроки на нашей платформе",
                  "Поможем выбрать тариф и разобраться с документами",
                  "Откроем бесплатный доступ, чтобы вы могли всё попробовать сами",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--brand-accent)" }}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold">Записаться</h3>
              <div className="mt-4">
                <LeadForm submitLabel="Записаться" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="scroll-mt-24 bg-secondary/60 py-16 sm:py-20"
        >
          <div className="container-page max-w-3xl">
            <SectionTitle>
              <span id="faq-title">Частые вопросы</span>
            </SectionTitle>
            <Accordion type="single" collapsible className="mt-8">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-base text-muted-foreground">
                      {item.answer.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* База знаний */}
        <section
          id="knowledge"
          aria-labelledby="knowledge-title"
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="container-page">
            <SectionTitle>
              <span id="knowledge-title">
                Больше информации о дистанционном обучении в онлайн-школе
              </span>
            </SectionTitle>
            <p className="mt-4 text-muted-foreground">
              Узнать подробнее о дистанционном образовании детей вы можете в
              следующих материалах:
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {KNOWLEDGE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#knowledge"
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    style={{ textDecorationColor: "var(--brand-accent)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Skysmart. Домашний лицей.</p>
          <p>Онлайн-школа с аттестатом государственного образца, 5–11 класс.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
