import React from 'react';
import { SchoolCard } from '@/components/SchoolCard';
import { ComparisonBar } from '@/components/ComparisonBar';
import { schools } from '@/data/schools';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, TrendingUp, Users, Award, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Лучшие онлайн-школы программирования для детей
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Независимые рейтинги, честные отзывы и подробные сравнения школ программирования в России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Поиск школы программирования..." 
                  className="pl-10 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/70"
                />
              </div>
              <Button variant="secondary" size="lg" className="gap-2">
                <Filter className="h-4 w-4" />
                Фильтры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Школ в рейтинге</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">75,000+</div>
              <div className="text-sm text-muted-foreground">Учеников обучается</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <Star className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">1,500+</div>
              <div className="text-sm text-muted-foreground">Проверенных отзывов</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Языков программирования</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar Filters */}
              <aside className="lg:w-80 space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border shadow-card">
                  <h3 className="font-semibold mb-4 text-card-foreground">Быстрые фильтры</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        6-10 лет
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        11-14 лет
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        15+ лет
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        Scratch
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        Python
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        JavaScript
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        До 5000₽
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        Пробный урок
                      </Badge>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Rankings */}
              <main className="flex-1">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    ТОП-10 школ программирования 2024
                  </h2>
                  <p className="text-muted-foreground">
                    Рейтинг составлен на основе отзывов родителей, качества обучения, 
                    результатов учеников и других важных критериев.
                  </p>
                </div>

                <div className="space-y-6">
                  {schools.map((school) => (
                    <SchoolCard key={school.id} school={school} />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg">
                    Показать все школы
                  </Button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
      
      <ComparisonBar />
    </div>
  );
};

export default Index;
