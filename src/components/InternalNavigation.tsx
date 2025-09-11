import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Users, FileText, HelpCircle, BarChart3 } from 'lucide-react';

const InternalNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { to: '/', label: 'Главная', icon: Home },
    { to: '/compare', label: 'Сравнение', icon: BarChart3 },
    { to: '/about', label: 'О проекте', icon: Users },
    { to: '/rating-methodology', label: 'Методология', icon: FileText },
  ];

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Рейтинг школ программирования
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              
              return (
                <Button
                  key={item.to}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <Link to={item.to}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Главная
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InternalNavigation;