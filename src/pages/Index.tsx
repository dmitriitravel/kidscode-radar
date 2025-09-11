import React from 'react';
import { SchoolCard } from '@/components/SchoolCard';
import { ComparisonBar } from '@/components/ComparisonBar';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { Articles } from '@/components/Articles';
import Footer from '@/components/Footer';
import { schools } from '@/data/schools';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, GraduationCap, Users, Code, Star, X } from 'lucide-react';
import { useSchoolFilters } from '@/hooks/useSchoolFilters';
import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/StructuredData';

const Index = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeFilters,
    toggleFilter,
    clearFilters,
    filteredSchools,
    hasActiveFilters,
    resultsCount
  } = useSchoolFilters(schools);

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://programmirovanie-dlya-detej-online.ru';

  return (
    <>
      <SEOHead
        title="Лучшие онлайн-школы программирования для детей | Рейтинг 2025"
        description="Независимый рейтинг с честными отзывами и подробным сравнением школ программирования для детей и подростков. Выберите лучшую школу для своего ребенка."
        keywords="программирование для детей, онлайн школа программирования, курсы программирования дети, Python для детей, Scratch, JavaScript дети, рейтинг школ программирования"
        canonicalUrl={currentUrl}
        ogTitle="ТОП-10 онлайн-школ программирования для детей в России | Рейтинг 2025"
        ogDescription="Независимый рейтинг лучших онлайн-школ программирования для детей. Сравнение цен, отзывы, подробные обзоры курсов."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ТОП-10 онлайн-школ программирования для детей в России",
          "description": "Независимый рейтинг лучших онлайн-школ программирования для детей и подростков. Сравнение цен, отзывы родителей, подробные обзоры курсов Python, Scratch, JavaScript.",
          "url": currentUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${currentUrl}/?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Лучшие онлайн-школы программирования для детей
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Независимый рейтинг с честными отзывами и подробным сравнением школ программирования для детей и подростков</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Введите название школы или язык программирования" className="pl-10 h-11 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/70" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="lg" className="gap-2" onClick={() => {
                const resultsSection = document.querySelector('main');
                resultsSection?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  <Search className="h-4 w-4" />
                  Поиск
                </Button>
                {hasActiveFilters && <Button variant="outline" size="lg" className="gap-2 bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20" onClick={clearFilters}>
                    <X className="h-4 w-4" />
                    Очистить
                  </Button>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 lg:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">10</div>
              <div className="text-sm text-muted-foreground">Школ в рейтинге</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">75,000+</div>
              <div className="text-sm text-muted-foreground">Учеников </div>
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
                <Code className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Языков программирования</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Sidebar Filters */}
            <aside className="lg:w-80 xl:w-96 space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border shadow-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-card-foreground">Быстрые фильтры</h3>
                    {hasActiveFilters && <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 lg:px-3">
                        <X className="h-3 w-3 mr-1" />
                        Очистить
                      </Button>}
                  </div>
                  <div className="space-y-4">
                    {/* Возрасты */}
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">Возраст ребенка</h4>
                      <div className="flex flex-wrap gap-2">
                        {['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'].map(age => (
                          <Badge 
                            key={age} 
                            variant={activeFilters.ages.includes(age) ? "default" : "outline"} 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" 
                            onClick={() => toggleFilter('ages', age)}
                          >
                            {age} лет
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Языки программирования */}
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">Языки программирования</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Scratch', 'Python', 'JavaScript', 'Java', 'Unity', 'Roblox', 'Minecraft', 'C++', 'Web-разработка', 'Мобильная разработка', 'Kotlin', 'Веб-дизайн', 'Робототехника'].map(language => (
                          <Badge 
                            key={language} 
                            variant={activeFilters.languages.includes(language) ? "default" : "outline"} 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" 
                            onClick={() => toggleFilter('languages', language)}
                          >
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Форматы обучения */}
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">Формат обучения</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { key: 'online', label: 'Онлайн' },
                          { key: 'offline', label: 'Офлайн' },
                          { key: 'hybrid', label: 'Гибрид' }
                        ].map(format => (
                          <Badge 
                            key={format.key} 
                            variant={activeFilters.formats.includes(format.key) ? "default" : "outline"} 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" 
                            onClick={() => toggleFilter('formats', format.key)}
                          >
                            {format.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Rankings */}
              <main className="flex-1">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      {hasActiveFilters ? `Найдено школ: ${resultsCount}` : 'Топ-10 школ программирования в 2025 году'}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {hasActiveFilters ? 'Результаты поиска и фильтрации школ программирования' : 'Рейтинг составлен на основе отзывов родителей, качества обучения, результатов учеников и других важных критериев.'}
                  </p>
                </div>

                <div className="space-y-6">
                  {filteredSchools.length > 0 ? filteredSchools.map(school => <SchoolCard key={school.id} school={school} />) : <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-medium mb-2">Ничего не найдено</h3>
                        <p>Попробуйте изменить критерии поиска или очистить фильтры</p>
                      </div>
                      {hasActiveFilters && <Button variant="outline" onClick={clearFilters}>
                          Очистить все фильтры
                        </Button>}
                    </div>}
                </div>

              </main>
            </div>
        </div>
      </section>

      <StructuredData type="website" />
      <StructuredData type="itemlist" data={schools} />
      
      <Reviews />
      
      <FAQ />
      
      <Articles />
      
      <ComparisonBar />
      
      <Footer />
      </div>
    </>
  );
};

export default Index;