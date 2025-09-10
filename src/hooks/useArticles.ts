import { useMemo } from 'react';
import { articles } from '@/data/articles';
import { Article } from '@/types/article';

export const useArticles = () => {
  // Фильтруем статьи с уникальными ID для избежания ошибок React
  const uniqueArticles = useMemo(() => {
    const seen = new Set();
    return articles.filter(article => {
      if (seen.has(article.id)) {
        return false;
      }
      seen.add(article.id);
      return true;
    });
  }, []);

  const featuredArticles = useMemo(() => 
    uniqueArticles.filter(article => article.featured).slice(0, 10),
    [uniqueArticles]
  );

  const getArticleBySlug = (slug: string): Article | undefined => {
    return uniqueArticles.find(article => article.slug === slug);
  };

  const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
    return uniqueArticles
      .filter(article => 
        article.id !== currentArticle.id && 
        (article.category.id === currentArticle.category.id || 
         article.tags.some(tag => currentArticle.tags.includes(tag)))
      )
      .slice(0, limit);
  };

  return {
    uniqueArticles,
    featuredArticles,
    getArticleBySlug,
    getRelatedArticles,
  };
};