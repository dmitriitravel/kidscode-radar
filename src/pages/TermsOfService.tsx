import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Правила пользования сервисом",
    "description": "Правила пользования платформой рейтинга онлайн-школ программирования для детей",
    "url": `${typeof window !== 'undefined' ? window.location.origin : 'https://programmirovanie-dlya-detej-online.ru'}/terms-of-service`
  };

  return (
    <>
      <SEOHead
        title="Правила пользования сервисом | Условия использования платформы"
        description="Правила и условия использования нашей платформы рейтинга школ программирования для детей. Права и обязанности пользователей."
        keywords="правила пользования, условия использования, пользовательское соглашение, права пользователей"
        canonicalUrl={`${typeof window !== 'undefined' ? window.location.origin : 'https://programmirovanie-dlya-detej-online.ru'}/terms-of-service`}
        ogTitle="Правила пользования сервисом | Рейтинг школ программирования"
        ogDescription="Условия использования платформы рейтинга онлайн-школ программирования для детей."
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
                <BreadcrumbPage>Правила пользования сервисом</BreadcrumbPage>
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
                Правила пользования сервисом
              </h1>
              <p className="text-lg text-muted-foreground">
                Последнее обновление: Декабрь 2024
              </p>
              <Separator className="mt-6" />
            </header>

            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    Добро пожаловать на нашу платформу рейтинга онлайн-школ программирования 
                    для детей. Используя наш сервис, вы соглашаетесь с данными правилами. 
                    Пожалуйста, внимательно прочитайте их перед использованием сайта.
                  </p>
                </div>
              </section>

              {/* Acceptance */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Принятие условий
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">
                            Используя наш сайт, вы подтверждаете, что ознакомились с настоящими 
                            правилами и согласны их соблюдать.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">
                            Если вы не согласны с какими-либо условиями, пожалуйста, 
                            не используйте наш сервис.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">
                            Мы можем изменять эти правила. Продолжение использования сайта 
                            означает согласие с обновленными условиями.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Description of service */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Описание сервиса</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Что мы предоставляем
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Независимый рейтинг онлайн-школ программирования для детей</li>
                        <li>• Сравнительные таблицы курсов и программ обучения</li>
                        <li>• Отзывы и оценки от реальных учеников и родителей</li>
                        <li>• Информационные статьи о программировании для детей</li>
                        <li>• Инструменты для поиска и фильтрации школ</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                        Важные замечания
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Мы не являемся образовательным учреждением</li>
                        <li>• Мы не продаем курсы и не принимаем платежи за обучение</li>
                        <li>• Рейтинги основаны на нашей методологии и могут изменяться</li>
                        <li>• Мы не гарантируем результаты обучения в школах</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* User obligations */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Обязанности пользователей
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Допустимое использование
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-foreground">✅ Разрешается:</h4>
                          <ul className="mt-2 space-y-1 text-muted-foreground">
                            <li>• Просматривать рейтинги и сравнивать школы</li>
                            <li>• Оставлять честные отзывы о школах</li>
                            <li>• Делиться ссылками на наш сайт</li>
                            <li>• Использовать информацию для выбора школы</li>
                            <li>• Задавать вопросы через форму обратной связи</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground">❌ Запрещается:</h4>
                          <ul className="mt-2 space-y-1 text-muted-foreground">
                            <li>• Публиковать ложную или неточную информацию</li>
                            <li>• Размещать спам или рекламу</li>
                            <li>• Использовать оскорбительные выражения</li>
                            <li>• Нарушать авторские права</li>
                            <li>• Пытаться получить несанкционированный доступ к системе</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Reviews and content */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Отзывы и пользовательский контент
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">Требования к отзывам:</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>• Отзывы должны быть основаны на реальном опыте</li>
                          <li>• Используйте уважительный тон</li>
                          <li>• Не раскрывайте персональные данные других людей</li>
                          <li>• Будьте объективны и конструктивны</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground">Наши права:</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>• Модерировать и редактировать отзывы</li>
                          <li>• Удалять неподходящий контент</li>
                          <li>• Блокировать пользователей за нарушения</li>
                          <li>• Проверять подлинность отзывов</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Intellectual property */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Интеллектуальная собственность
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Наши права</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Дизайн и структура сайта</li>
                        <li>• Методология составления рейтингов</li>
                        <li>• Логотипы и товарные знаки</li>
                        <li>• Оригинальные статьи и контент</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ваши права</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Личное некоммерческое использование</li>
                        <li>• Цитирование с указанием источника</li>
                        <li>• Ваши отзывы остаются вашими</li>
                        <li>• Право на удаление ваших данных</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Отказ от ответственности
                </h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-200 p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-orange-800 mb-2">
                        Важное предупреждение
                      </h3>
                      <div className="space-y-3 text-orange-700">
                        <p>
                          Информация на сайте предоставляется "как есть" для общего 
                          ознакомления. Мы не гарантируем:
                        </p>
                        <ul className="space-y-1">
                          <li>• Точность всей информации о школах</li>
                          <li>• Постоянную доступность сайта</li>
                          <li>• Результаты обучения в рекомендуемых школах</li>
                          <li>• Соответствие школ вашим ожиданиям</li>
                        </ul>
                        <p>
                          Окончательное решение о выборе школы принимаете вы. 
                          Обязательно изучайте условия школ самостоятельно.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Конфиденциальность
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Использование наших услуг также регулируется нашей 
                      Политикой конфиденциальности, которая объясняет, 
                      как мы собираем и используем ваши данные.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/privacy-policy">
                        Прочитать Политику конфиденциальности
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Прекращение использования
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">Мы можем заблокировать доступ если:</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>• Вы нарушаете эти правила</li>
                          <li>• Публикуете ложную информацию</li>
                          <li>• Пытаетесь навредить сайту или пользователям</li>
                          <li>• Не соблюдаете российское законодательство</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground">Вы можете прекратить использование:</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>• В любое время без объяснения причин</li>
                          <li>• Удалив ваши отзывы и данные</li>
                          <li>• Отказавшись от рассылки</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Governing law */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Применимое право
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Настоящие правила регулируются законодательством Российской Федерации. 
                      Все споры рассматриваются в судах г. Москвы в соответствии с 
                      российским правом.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Изменения в правилах
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Мы можем изменять эти правила для соответствия изменениям 
                      в сервисе или законодательстве. О значительных изменениях 
                      мы уведомим заранее.
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Уведомление на главной странице</p>
                      <p>• Email-рассылка для подписчиков</p>
                      <p>• Обновление даты в начале документа</p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Контакты</h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      По вопросам соблюдения правил и работы сервиса:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>📧 Email: support@programmirovanie-dlya-detej-online.ru</p>
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

export default TermsOfService;