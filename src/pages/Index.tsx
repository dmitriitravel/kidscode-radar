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
import { TeachersSlider } from "@/components/landing/TeachersSlider";
import { ScheduleBlock } from "@/components/landing/ScheduleBlock";
import { PickSchedule } from "@/components/landing/PickSchedule";
import { SocialDevelopment } from "@/components/landing/SocialDevelopment";
import { FamiliesTrust } from "@/components/landing/FamiliesTrust";
import { StudentsFuture } from "@/components/landing/StudentsFuture";
import { TariffsPlans } from "@/components/landing/TariffsPlans";
import { FamilyBudget } from "@/components/landing/FamilyBudget";
import { HowToSwitch } from "@/components/landing/HowToSwitch";
import { ConsultBooking } from "@/components/landing/ConsultBooking";
import { FaqBlock } from "@/components/landing/FaqBlock";
import { KnowledgeBase } from "@/components/landing/KnowledgeBase";
import { Footer } from "@/components/landing/Footer";
import { CitiesPicker } from "@/components/landing/CitiesPicker";
import { SocialProof } from "@/components/landing/SocialProof";
import { SEOHead } from "@/components/SEOHead";
import { FAQ_ITEMS } from "@/data/landing";

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

        <TeachersSlider />

        <ScheduleBlock />

        <PickSchedule />

        <SocialDevelopment />

        <FamiliesTrust />

        <StudentsFuture />

        <TariffsPlans />

        <FamilyBudget />

        <HowToSwitch />

        <ConsultBooking />

        <FaqBlock />

        <TrialBlock />

        <KnowledgeBase />
      </main>

      <CitiesPicker />

      <Footer />
    </>
  );
};

export default Index;
