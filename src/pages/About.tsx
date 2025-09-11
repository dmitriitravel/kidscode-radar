import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { ArrowLeft, Target, Users, Award, Shield } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "School Rating Platform",
      "description": "Независимая платформа для сравнения и выбора лучших онлайн-школ программирования для детей в России",
      "url": typeof window !== 'undefined' ? window.location.origin : '',
      "foundingDate": "2024",
      "areaServed": "Russia",
      "serviceType": "Educational Rating Platform"
    }
  };

  return (
    <>
      <SEOHead
        title="О проекте | Рейтинг онлайн-школ программирования для детей"
        description="Узнайте больше о нашей независимой платформе для сравнения онлайн-школ программирования для детей. Наша миссия, принципы работы и команда экспертов."
        keywords="о проекте, рейтинг школ программирования, независимая оценка, команда экспертов, миссия"
        canonicalUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/about`}
        ogTitle="О нашем проекте | Независимый рейтинг школ программирования"
        ogDescription="Узнайте о миссии и принципах работы нашей платформы для сравнения онлайн-школ программирования для детей."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <InternalNavigation />
        <div className="container mx-auto px-4 py-6 lg:py-8 max-w-4xl">
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
                <BreadcrumbPage>О проекте</BreadcrumbPage>
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

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                О проекте
              </h1>
              <p className="text-lg text-muted-foreground">
                Независимая платформа для выбора лучших онлайн-школ программирования для детей
              </p>
              <Separator className="mt-6" />
            </header>

            <div className="space-y-8">
              {/* Mission */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Наша миссия</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Помочь российским родителям и детям найти идеальную онлайн-школу программирования. 
                  Мы верим, что каждый ребенок заслуживает качественного IT-образования, которое откроет 
                  перед ним множество возможностей в цифровом будущем.
                </p>
              </section>

              {/* What we do */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Что мы делаем</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Независимая оценка
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Проводим объективный анализ школ программирования на основе 
                        методологии, отзывов учеников и экспертной оценки.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Сравнение программ
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Предоставляем детальное сравнение курсов, цен, преподавателей 
                        и форматов обучения разных школ.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Проверенная информация
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Вся информация о школах проверяется нашей командой экспертов 
                        и регулярно обновляется.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Персональные рекомендации
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Помогаем подобрать школу под конкретные потребности, возраст 
                        и уровень подготовки ребенка.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Our approach */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Наш подход</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Комплексный анализ</h3>
                        <p className="text-muted-foreground">
                          Изучаем программы обучения, квалификацию преподавателей, техническую платформу и результаты выпускников.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Реальные отзывы</h3>
                        <p className="text-muted-foreground">
                          Собираем и проверяем отзывы от родителей и учеников, которые действительно проходили обучение.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Прозрачная методология</h3>
                        <p className="text-muted-foreground">
                          Используем четкие критерии оценки, которые открыты для всех пользователей нашей платформы.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Values */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Наши ценности</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Независимость</h3>
                    <p className="text-sm text-muted-foreground">
                      Мы не получаем комиссии от школ за высокие рейтинги
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Качество</h3>
                    <p className="text-sm text-muted-foreground">
                      Тщательно проверяем каждую школу и курс
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Поддержка</h3>
                    <p className="text-sm text-muted-foreground">
                      Помогаем родителям принять правильное решение
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Свяжитесь с нами</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Есть вопросы о нашем рейтинге или предложения по улучшению? 
                      Мы всегда рады обратной связи от родителей и школ.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      📧 Email: support@programmirovanie-dlya-detej-online.ru
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild>
                        <Link to="/">
                          Перейти к рейтингу школ
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/rating-methodology">
                          Узнать о методологии
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;