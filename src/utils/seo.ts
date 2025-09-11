export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: "ТОП-10 онлайн-школ программирования для детей в России | Рейтинг 2025",
  description: "Независимый рейтинг лучших онлайн-школ программирования для детей и подростков. Сравнение цен, отзывы родителей, подробные обзоры курсов Python, Scratch, JavaScript.",
  keywords: "программирование для детей, онлайн школа программирования, курсы программирования дети, Python для детей, Scratch, JavaScript дети",
  ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType: "website"
};

export const generatePageSEO = (
  pageType: 'home' | 'compare' | 'about' | 'privacy' | 'terms' | 'methodology' | 'article',
  data?: any
): SEOData => {
  const baseUrl = 'https://programmirovanie-dlya-detej-online.ru';
  
  switch (pageType) {
    case 'home':
      return {
        ...defaultSEO,
        canonicalUrl: baseUrl,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ТОП-10 онлайн-школ программирования для детей в России",
          "description": defaultSEO.description,
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/?search={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      };

    case 'compare':
      return {
        title: "Сравнение школ программирования для детей | Рейтинг 2025",
        description: "Подробное сравнение лучших онлайн-школ программирования для детей. Сравните цены, курсы, методики обучения и выберите идеальную школу для вашего ребенка.",
        keywords: "сравнение школ программирования, выбор курсов программирования для детей, онлайн обучение программированию",
        canonicalUrl: `${baseUrl}/compare`,
        ogType: "website"
      };

    case 'about':
      return {
        title: "О проекте - Рейтинг школ программирования для детей",
        description: "Узнайте больше о нашем независимом рейтинге онлайн-школ программирования для детей. Методология оценки, критерии отбора и команда экспертов.",
        keywords: "о проекте, методология рейтинга, команда экспертов, независимый рейтинг школ",
        canonicalUrl: `${baseUrl}/about`,
        ogType: "website"
      };

    case 'privacy':
      return {
        title: "Политика конфиденциальности | School Rating Platform",
        description: "Политика конфиденциальности и обработки персональных данных на платформе рейтинга школ программирования для детей.",
        canonicalUrl: `${baseUrl}/privacy-policy`,
        ogType: "website"
      };

    case 'terms':
      return {
        title: "Условия использования | School Rating Platform",
        description: "Условия использования платформы рейтинга онлайн-школ программирования для детей и подростков.",
        canonicalUrl: `${baseUrl}/terms-of-service`,
        ogType: "website"
      };

    case 'methodology':
      return {
        title: "Методология составления рейтинга школ программирования",
        description: "Подробная методология и критерии оценки онлайн-школ программирования для детей. Узнайте, как мы составляем независимый рейтинг.",
        keywords: "методология рейтинга, критерии оценки школ, как выбрать школу программирования",
        canonicalUrl: `${baseUrl}/rating-methodology`,
        ogType: "website"
      };

    case 'article':
      if (!data) return defaultSEO;
      return {
        title: `${data.title} | Программирование для детей`,
        description: data.excerpt,
        keywords: `${data.tags.join(', ')}, программирование для детей, ${data.category.name}`,
        canonicalUrl: `${baseUrl}/articles/${data.slug}`,
        ogType: "article",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.excerpt,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "datePublished": data.publishDate,
          "dateModified": data.publishDate,
          "mainEntityOfPage": `${baseUrl}/articles/${data.slug}`,
          "articleSection": data.category.name,
          "keywords": data.tags.join(', ')
        }
      };

    default:
      return defaultSEO;
  }
};