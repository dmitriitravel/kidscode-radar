import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Рейтинг школ программирования
            </h3>
            <p className="text-sm text-muted-foreground">
              Независимая платформа для выбора лучших онлайн-школ программирования для детей в России.
            </p>
            <p className="text-xs text-muted-foreground">
              Помогаем родителям найти идеальное IT-образование для своих детей.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Быстрые ссылки</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Главная
              </Link>
              <Link 
                to="/compare" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Сравнение школ
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                О проекте
              </Link>
              <Link 
                to="/rating-methodology" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Методология рейтинга
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Информация</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Правила пользования
              </Link>
              <a 
                href="mailto:support@programmirovanie-dlya-detej-online.ru" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Обратная связь
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 support@programmirovanie-dlya-detej-online.ru</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Рейтинг школ программирования. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Конфиденциальность
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;