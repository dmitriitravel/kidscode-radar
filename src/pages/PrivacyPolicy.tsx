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
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Политика конфиденциальности",
    "description": "Политика конфиденциальности платформы рейтинга онлайн-школ программирования для детей",
    "url": `${typeof window !== 'undefined' ? window.location.origin : 'https://programmirovanie-dlya-detej-online.ru'}/privacy-policy`
  };

  return (
    <>
      <SEOHead
        title="Политика конфиденциальности | Защита данных пользователей"
        description="Политика конфиденциальности нашей платформы. Узнайте, как мы собираем, используем и защищаем ваши персональные данные."
        keywords="политика конфиденциальности, защита персональных данных, GDPR, безопасность данных"
        canonicalUrl={`${typeof window !== 'undefined' ? window.location.origin : 'https://programmirovanie-dlya-detej-online.ru'}/privacy-policy`}
        ogTitle="Политика конфиденциальности | Рейтинг школ программирования"
        ogDescription="Узнайте, как мы защищаем ваши персональные данные на платформе рейтинга школ программирования для детей."
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
                <BreadcrumbPage>Политика конфиденциальности</BreadcrumbPage>
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
                Политика конфиденциальности
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
                    Мы серьезно относимся к защите ваших персональных данных. Эта политика 
                    конфиденциальности объясняет, как мы собираем, используем и защищаем 
                    информацию при использовании нашей платформы рейтинга онлайн-школ 
                    программирования для детей.
                  </p>
                </div>
              </section>

              {/* Information we collect */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Какую информацию мы собираем
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" />
                        Информация, которую вы предоставляете добровольно
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Имя и контактная информация при обратной связи</li>
                        <li>• Отзывы о школах программирования</li>
                        <li>• Вопросы и комментарии через форму связи</li>
                        <li>• Данные при подписке на новости (email)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-primary" />
                        Информация, собираемая автоматически
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• IP-адрес и местоположение (город/регион)</li>
                        <li>• Тип браузера и операционной системы</li>
                        <li>• Страницы, которые вы посещаете на сайте</li>
                        <li>• Время посещения и продолжительность сессии</li>
                        <li>• Реферальные источники (откуда пришли на сайт)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* How we use information */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Как мы используем информацию
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Основные цели</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Предоставление и улучшение наших услуг</li>
                        <li>• Ответы на ваши вопросы и обратную связь</li>
                        <li>• Обновление рейтингов на основе отзывов</li>
                        <li>• Отправка важных уведомлений</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Аналитика и улучшения</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Анализ посещаемости сайта</li>
                        <li>• Улучшение пользовательского опыта</li>
                        <li>• Техническая поддержка и диагностика</li>
                        <li>• Предотвращение мошенничества</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Использование cookies</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Мы используем cookies для улучшения работы сайта и анализа его использования:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">Необходимые cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          Обеспечивают базовую функциональность сайта (сессии, настройки)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Аналитические cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          Помогают понять, как пользователи взаимодействуют с сайтом (Google Analytics)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Функциональные cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          Запоминают ваши предпочтения (язык, фильтры поиска)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Data sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Передача данных третьим лицам
                </h2>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Мы НЕ продаем ваши данные</h3>
                      <p className="text-muted-foreground">
                        Мы никогда не продаем, не сдаем в аренду и не передаем ваши 
                        персональные данные третьим лицам в коммерческих целях.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Исключения:</h4>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• По требованию правоохранительных органов</li>
                        <li>• Для защиты наших прав и безопасности</li>
                        <li>• С вашего явного согласия</li>
                        <li>• Сервисы аналитики (Google Analytics) - анонимно</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data security */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Безопасность данных</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        Технические меры
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• SSL-шифрование всех данных</li>
                        <li>• Защищенные серверы</li>
                        <li>• Регулярные обновления безопасности</li>
                        <li>• Ограниченный доступ к данным</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Организационные меры
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Обучение сотрудников</li>
                        <li>• Политики доступа к данным</li>
                        <li>• Регулярный аудит безопасности</li>
                        <li>• План реагирования на инциденты</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Your rights */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Ваши права</h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      В соответствии с российским законодательством о персональных данных, 
                      вы имеете право:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Право на доступ</h4>
                          <p className="text-sm text-muted-foreground">
                            Получить информацию о том, какие данные мы о вас храним
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Право на исправление</h4>
                          <p className="text-sm text-muted-foreground">
                            Исправить неточные или неполные данные
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Право на удаление</h4>
                          <p className="text-sm text-muted-foreground">
                            Удалить ваши персональные данные из наших систем
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Право на отзыв согласия</h4>
                          <p className="text-sm text-muted-foreground">
                            Отозвать согласие на обработку данных в любое время
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Children's privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Конфиденциальность детей
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Наш сайт предназначен для родителей, выбирающих школы программирования 
                      для своих детей. Мы не собираем персональные данные детей напрямую.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Дети до 14 лет должны использовать сайт под присмотром родителей</li>
                      <li>• Отзывы о школах оставляют только родители или законные представители</li>
                      <li>• При обнаружении данных несовершеннолетних мы их немедленно удаляем</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Изменения в политике
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Мы можем обновлять эту политику конфиденциальности время от времени. 
                      О существенных изменениях мы уведомим вас:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Размещением уведомления на главной странице сайта</li>
                      <li>• Отправкой email-уведомления (если вы подписаны)</li>
                      <li>• Обновлением даты "последнего обновления" в начале документа</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Контактная информация</h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Если у вас есть вопросы о нашей политике конфиденциальности или 
                      вы хотите воспользоваться своими правами, свяжитесь с нами:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>📧 Email: support@programmirovanie-dlya-detej-online.ru</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Мы обязуемся ответить на ваш запрос в течение 30 дней с момента получения.
                      </p>
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

export default PrivacyPolicy;