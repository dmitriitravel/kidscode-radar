import { useMemo } from 'react';
import { articles } from '@/data/articles';
import { Article } from '@/types/article';

export const useArticles = () => {
  const featuredArticles = useMemo(() => 
    articles.filter(article => article.featured).slice(0, 10),
    []
  );

  const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
  };

  const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
    return articles
      .filter(article => 
        article.id !== currentArticle.id && 
        (article.category.id === currentArticle.category.id || 
         article.tags.some(tag => currentArticle.tags.includes(tag)))
      )
      .slice(0, limit);
  };

  return {
    articles,
    featuredArticles,
    getArticleBySlug,
    getRelatedArticles,
  };
};