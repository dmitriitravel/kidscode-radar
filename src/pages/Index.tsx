import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { ParentConcerns } from "@/components/landing/ParentConcerns";
import { ProgramFeatures } from "@/components/landing/ProgramFeatures";
import { ConsultBanner } from "@/components/landing/ConsultBanner";
import { ApprovalOfficial } from "@/components/landing/ApprovalOfficial";
import { LyceumProcess } from "@/components/landing/LyceumProcess";
import { CertificateBlock } from "@/components/landing/CertificateBlock";
import { TrialBlock } from "@/components/landing/TrialBlock";
import { ScheduleBlock } from "@/components/landing/ScheduleBlock";
import { PickSchedule } from "@/components/landing/PickSchedule";
import { SocialDevelopment } from "@/components/landing/SocialDevelopment";
import { FamiliesTrust } from "@/components/landing/FamiliesTrust";
import { StudentsFuture } from "@/components/landing/StudentsFuture";
import { TariffsPlans } from "@/components/landing/TariffsPlans";
import { FamilyBudget } from "@/components/landing/FamilyBudget";
import { HowToSwitch } from "@/components/landing/HowToSwitch";
import { ConsultBooking } from "@/components/landing/ConsultBooking";
import { SocialProof } from "@/components/landing/SocialProof";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, KNOWLEDGE_LINKS } from "@/data/landing";

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

        <ConsultBanner />

        <ApprovalOfficial />

        <LyceumProcess />

        <CertificateBlock />

        <ScheduleBlock />

        <PickSchedule />

        <SocialDevelopment />

        <FamiliesTrust />

        <StudentsFuture />

        <TariffsPlans />

        <FamilyBudget />

        <HowToSwitch />

        <ConsultBooking />

        <TrialBlock />

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
