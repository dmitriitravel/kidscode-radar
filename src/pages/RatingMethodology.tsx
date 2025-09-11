import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { ArrowLeft, Calculator, Star, Users, BookOpen, Award, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';

const RatingMethodology: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Методология составления рейтинга онлайн-школ программирования",
    "description": "Подробное описание критериев и методологии оценки онлайн-школ программирования для детей",
    "url": `${window.location.origin}/rating-methodology`
  };

  const criteria = [
    { name: "Качество программы", weight: 25, icon: BookOpen },
    { name: "Преподаватели", weight: 20, icon: Users },
    { name: "Отзывы учеников", weight: 20, icon: Star },
    { name: "Результативность", weight: 15, icon: Award },
    { name: "Техническая платформа", weight: 10, icon: Calculator },
    { name: "Соотношение цена/качество", weight: 10, icon: CheckCircle }
  ];

  return (
    <>
      <SEOHead
        title="Как составляется рейтинг | Методология оценки школ программирования"
        description="Узнайте, как мы составляем независимый рейтинг онлайн-школ программирования для детей. Критерии оценки, веса факторов и прозрачная методология."
        keywords="методология рейтинга, критерии оценки школ, как составляется рейтинг, независимая оценка, качество образования"
        canonicalUrl={`${window.location.origin}/rating-methodology`}
        ogTitle="Методология составления рейтинга школ программирования"
        ogDescription="Прозрачная методология оценки онлайн-школ программирования: критерии, веса факторов и процесс анализа."
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
                <BreadcrumbPage>Методология рейтинга</BreadcrumbPage>
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
                Как составляется рейтинг
              </h1>
              <p className="text-lg text-muted-foreground">
                Прозрачная методология оценки онлайн-школ программирования для детей
              </p>
              <Separator className="mt-6" />
            </header>

            <div className="space-y-8">
              {/* Overview */}
              <section>
                <div className="bg-primary/5 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-3">Основные принципы</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Объективность и независимость оценки
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Комплексный подход к анализу школ
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Регулярное обновление информации
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Прозрачность критериев оценки
                    </li>
                  </ul>
                </div>
              </section>

              {/* Criteria weights */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Критерии оценки и их вес</h2>
                <div className="space-y-4">
                  {criteria.map((criterion, index) => {
                    const Icon = criterion.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5 text-primary" />
                              <h3 className="font-semibold text-foreground">{criterion.name}</h3>
                            </div>
                            <Badge variant="secondary">{criterion.weight}%</Badge>
                          </div>
                          <Progress value={criterion.weight * 4} className="h-2" />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Detailed criteria */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Подробное описание критериев</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Качество программы (25%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Структурированность и логика подачи материала</li>
                        <li>• Актуальность технологий и языков программирования</li>
                        <li>• Наличие практических проектов и заданий</li>
                        <li>• Соответствие программы возрастным особенностям</li>
                        <li>• Пошаговое усложнение материала</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Преподаватели (20%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Опыт работы в IT и преподавании</li>
                        <li>• Образование и профессиональные сертификации</li>
                        <li>• Умение работать с детьми</li>
                        <li>• Количество преподавателей на одного ученика</li>
                        <li>• Постоянство состава преподавателей</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Отзывы учеников (20%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Средняя оценка от родителей и учеников</li>
                        <li>• Количество и качество отзывов</li>
                        <li>• Рекомендации выпускников</li>
                        <li>• Уровень удовлетворенности обучением</li>
                        <li>• Процент студентов, завершивших курс</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Результативность (15%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Портфолио проектов учеников</li>
                        <li>• Участие в олимпиадах и конкурсах</li>
                        <li>• Трудоустройство выпускников (для старших групп)</li>
                        <li>• Продолжение обучения в IT-сфере</li>
                        <li>• Реальные навыки после окончания курса</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-primary" />
                        Техническая платформа (10%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Удобство и интуитивность интерфейса</li>
                        <li>• Стабильность работы платформы</li>
                        <li>• Качество видеосвязи и записей уроков</li>
                        <li>• Инструменты для совместной работы</li>
                        <li>• Мобильная версия и доступность</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Соотношение цена/качество (10%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Стоимость обучения относительно рынка</li>
                        <li>• Объем получаемых знаний за деньги</li>
                        <li>• Дополнительные материалы и бонусы</li>
                        <li>• Гибкость в оплате и возврате средств</li>
                        <li>• Соотношение цены и длительности курса</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Process */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Процесс оценки</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1">1</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Сбор данных</h3>
                        <p className="text-muted-foreground">
                          Анализируем официальную информацию школ, программы курсов, 
                          квалификацию преподавателей.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1">2</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Экспертная оценка</h3>
                        <p className="text-muted-foreground">
                          Наши эксперты в области IT-образования проводят детальный анализ 
                          каждой школы по всем критериям.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1">3</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Анализ отзывов</h3>
                        <p className="text-muted-foreground">
                          Собираем и проверяем отзывы родителей и учеников из различных источников, 
                          исключая фейковые отзывы.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1">4</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Расчет рейтинга</h3>
                        <p className="text-muted-foreground">
                          Применяем весовые коэффициенты к каждому критерию и получаем 
                          итоговый балл школы.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1">5</Badge>
                      <div>
                        <h3 className="font-semibold text-foreground">Обновление</h3>
                        <p className="text-muted-foreground">
                          Регулярно обновляем информацию и пересматриваем рейтинги 
                          с учетом новых данных.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transparency */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Прозрачность и независимость</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground">Финансовая независимость</h3>
                          <p className="text-muted-foreground">
                            Мы не получаем комиссии или рекламные платежи от школ за высокие позиции в рейтинге.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground">Открытая методология</h3>
                          <p className="text-muted-foreground">
                            Все критерии оценки и их веса публично доступны и не изменяются без уведомления.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground">Возможность апелляции</h3>
                          <p className="text-muted-foreground">
                            Школы могут обратиться к нам для пересмотра оценки при предоставлении новых данных.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA */}
              <section>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Готовы выбрать лучшую школу для вашего ребенка?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Используйте наш рейтинг для принятия обоснованного решения
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild>
                        <Link to="/">
                          Посмотреть рейтинг школ
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/about">
                          Узнать о проекте
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

export default RatingMethodology;