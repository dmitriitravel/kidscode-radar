import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Страница не найдена | 404 ошибка",
    "description": "Запрашиваемая страница не найдена. Вернитесь на главную страницу рейтинга онлайн-школ программирования для детей.",
    "url": window.location.href
  };

  return (
    <>
      <SEOHead
        title="Страница не найдена | 404 ошибка"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу рейтинга онлайн-школ программирования для детей."
        canonicalUrl={`${window.location.origin}/404`}
        ogTitle="Страница не найдена | 404 ошибка"
        ogDescription="Запрашиваемая страница не найдена на нашем сайте."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
      <InternalNavigation />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Страница не найдена</p>
          <a href="/" className="text-primary underline hover:text-primary/80 transition-colors">
            Вернуться на главную
          </a>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default NotFound;
