import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Article } from '@/types/article';
import { School } from '@/types/school';

interface StructuredDataProps {
  type: 'website' | 'article' | 'organization' | 'educationalorganization' | 'itemlist';
  data?: Article | School | School[];
  title?: string;
  description?: string;
  url?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ 
  type, 
  data, 
  title, 
  description, 
  url 
}) => {
  const generateStructuredData = () => {
    const baseUrl = 'https://programmirovanie-dlya-detej-online.ru';
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : baseUrl);

    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ТОП-10 онлайн-школ программирования для детей в России",
          "description": "Независимый рейтинг лучших онлайн-школ программирования для детей и подростков. Сравнение цен, отзывы родителей, подробные обзоры курсов.",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/?search={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "School Rating Platform",
            "url": baseUrl
          }
        };

      case 'article':
        if (!data || !('content' in data)) return null;
        const article = data as Article;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt,
          "url": `${baseUrl}/articles/${article.slug}`,
          "datePublished": article.publishDate,
          "dateModified": article.publishDate,
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "School Rating Platform",
            "url": baseUrl
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/articles/${article.slug}`
          },
          "articleSection": article.category.name,
          "keywords": article.tags.join(', '),
          "wordCount": article.content.length / 5 // Rough estimate
        };

      case 'educationalorganization':
        if (!data || !('name' in data)) return null;
        const school = data as School;
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": school.name,
          "description": school.description,
          "url": school.website,
          "image": school.logo,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": school.rating,
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "100"
          },
          "offers": {
            "@type": "Offer",
            "price": school.price.min,
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          },
          "educationalCredentialAwarded": "Certificate",
          "hasCredential": "Programming Course Completion"
        };

      case 'itemlist':
        if (!Array.isArray(data)) return null;
        const schools = data as School[];
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "ТОП-10 онлайн-школ программирования для детей",
          "description": "Рейтинг лучших онлайн-школ программирования для детей в России",
          "url": baseUrl,
          "numberOfItems": schools.length,
          "itemListElement": schools.map((school, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "EducationalOrganization",
              "name": school.name,
              "description": school.description,
              "url": school.website,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": school.rating,
                "bestRating": "5"
              }
            }
          }))
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "School Rating Platform",
          "description": "Независимая платформа для сравнения и рейтинга онлайн-школ программирования для детей",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "sameAs": [
            "https://vk.com/school_rating",
            "https://t.me/school_rating"
          ]
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};