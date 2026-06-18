import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { ParentConcerns } from "@/components/landing/ParentConcerns";
import { ProgramFeatures } from "@/components/landing/ProgramFeatures";
import { ConsultBanner } from "@/components/landing/ConsultBanner";
import { ApprovalOfficial } from "@/components/landing/ApprovalOfficial";
import { AboutLyceum } from "@/components/landing/AboutLyceum";
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
import { CookieConsent } from "@/components/landing/CookieConsent";
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://homeschooling.skysmart.ru/",
            name: "Онлайн-школа Skysmart с аттестатом",
          },
        },
      ],
    },
    {
      "@type": "Course",
      name: "Онлайн-школа Skysmart с аттестатом в Москве",
      description:
        "Хотите, чтобы ваш ребёнок получил качественное образование, не выходя из дома? Мы предлагаем дистанционное обучение для школьников 5–11 классов. Получите аттестат государственного образца, не выходя из дома!",
      url: "https://homeschooling.skysmart.ru/",
      inLanguage: "ru",
      provider: {
        "@type": "Organization",
        name: "Онлайн-школа Skysmart",
        sameAs: "https://skysmart.ru",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        name: "Онлайн-школа Skysmart с аттестатом",
        courseMode: "online",
        courseWorkload: "P2H",
      },
      offers: {
        "@type": "Offer",
        lowPrice: "11560",
        priceCurrency: "RUB",
        availability: "http://schema.org/InStock",
        category: "Онлайн образование",
      },
    },
    {
      "@type": "Product",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "5",
      },
      description:
        "Хотите, чтобы ваш ребёнок получил качественное образование, не выходя из дома? Мы предлагаем дистанционное обучение для школьников 5–11 классов. Получите аттестат государственного образца, не выходя из дома!",
      name: "Онлайн-школа для детей Skysmart в Москве",
      sku: "",
      url: "https://homeschooling.skysmart.ru/",
      offers: {
        "@type": "AggregateOffer",
        url: "https://skysmart.ru/homeschooling",
        availability: "https://schema.org/InStock",
        highPrice: "50372",
        lowPrice: "11560",
        priceCurrency: "RUB",
      },
      review: [
        {
          "@type": "Review",
          author: "Ольга",
          datePublished: "2024-05-29",
          reviewBody:
            "Преподаватели в Домашнем лицее невероятные. Пока сын занимается, сама слушаю, настолько интересно всё объясняют.",
          name: "Skysmart",
          reviewRating: { "@type": "Rating", bestRating: "5", worstRating: "1", ratingValue: "5" },
        },
        {
          "@type": "Review",
          author: "Настя",
          datePublished: "2024-01-05",
          reviewBody:
            "Я очень довольна обучением в Домашнем лицее. Учителя здесь настоящие профессионалы, они не просто дают знания, но и умеют заинтересовать предметом. Например, благодаря занятиям по математике я смогла подготовиться к городской олимпиаде и даже выиграла приз за второе место. Мне нравится, что я могу учиться в своём темпе и повторять непонятные моменты сколько угодно раз.",
          name: "Skysmart",
          reviewRating: { "@type": "Rating", bestRating: "5", worstRating: "1", ratingValue: "5" },
        },
        {
          "@type": "Review",
          author: "Женя",
          datePublished: "2025-03-10",
          reviewBody:
            "Обычно мне сложно сосредоточиться на уроках, всё время кто-то отвлекает. Я или постоянно переспрашиваю, или не понимаю, что мы проходим. На семейном обучении я стал высыпаться, мне легче фокусироваться.",
          name: "Skysmart",
          reviewRating: { "@type": "Rating", bestRating: "5", worstRating: "1", ratingValue: "4" },
        },
        {
          "@type": "Review",
          author: "Наталья",
          datePublished: "2025-02-21",
          reviewBody:
            "Заметила, что сын стал отказываться от помощи с домашней работой по математике. Раньше мы каждый вечер с ним сидели, либо я, либо папа. Теперь только сам. Самое интересное, что оценки при этом не подкачали. Дневник проверяю без страха.",
          name: "Skysmart",
          reviewRating: { "@type": "Rating", bestRating: "5", worstRating: "1", ratingValue: "5" },
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Онлайн-школа с аттестатом в Москве [5–11 класс] Skysmart"
        description="Мы предлагаем дистанционное обучение в онлайн школе с аттестатом для 5–11 классов в Москве. Получите аттестат государственного образца, не выходя из дома!"
        keywords="онлайн школа, домашний лицей, семейное обучение, аттестат государственного образца, обучение на дому, Skysmart, 5-11 класс, аттестация ОГЭ ЕГЭ"
        canonicalUrl="https://homeschooling.skysmart.ru/"
        ogTitle="Онлайн-школа с аттестатом: обучение на дому, дистанционное обучение Skysmart"
        ogDescription="Дистанционное семейное образование для школьников с 5 по 11 класс — домашняя школа Skysmart 🏫 Полноценная онлайн-школа с прикреплением и аттестатом государственного образца"
        ogImage="https://cdn-user49501.skyeng.ru/assets/images/header/ogp/1200x630/share_uk.png?v=4"
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

        <AboutLyceum />

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

      <CookieConsent />
    </>
  );
};

export default Index;
