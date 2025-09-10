import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { useArticles } from '@/hooks/useArticles';
import NotFound from './NotFound';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticleBySlug, getRelatedArticles } = useArticles();

  if (!slug) return <NotFound />;

  const article = getArticleBySlug(slug);
  if (!article) return <NotFound />;

  const relatedArticles = getRelatedArticles(article);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Статьи</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к главной
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              {/* Article header */}
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {article.category.name}
                </Badge>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.publishDate).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} мин чтения</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Separator className="mb-8" />
              </header>

              {/* Article content */}
              <div className="text-foreground leading-relaxed">
                <p className="text-lg font-medium text-muted-foreground mb-6">
                  {article.excerpt}
                </p>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}>
                </div>
                
                {/* Only show placeholder for placeholder content */}
                {article.content === 'Содержание статьи будет добавлено позже...' && (
                  <div className="bg-muted/30 rounded-lg p-6 mt-8">
                    <p className="text-center text-muted-foreground">
                      📝 Контент статьи будет добавлен в ближайшее время
                    </p>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Похожие статьи</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedArticles.map((relatedArticle) => (
                      <div key={relatedArticle.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <h4 className="font-medium leading-tight mb-2">
                          <Link 
                            to={`/articles/${relatedArticle.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedArticle.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{relatedArticle.readTime} мин</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Back to main */}
              <Card>
                <CardContent className="pt-6">
                  <Button asChild className="w-full">
                    <Link to="/">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Вернуться к выбору школ
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;