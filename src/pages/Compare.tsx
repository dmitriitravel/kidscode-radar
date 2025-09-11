import React from 'react';
import { useComparison } from '@/contexts/ComparisonContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ComparisonTable } from '@/components/ComparisonTable';
import InternalNavigation from '@/components/InternalNavigation';
import Footer from '@/components/Footer';
import { ArrowLeft, GitCompare } from 'lucide-react';

const Compare: React.FC = () => {
  const { selectedSchools, clearComparison } = useComparison();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <InternalNavigation />
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
              className="shrink-0"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к рейтингу
            </Button>
            <div className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              <h1 className="text-2xl lg:text-3xl font-bold">Сравнение школ</h1>
            </div>
          </div>
          
          {selectedSchools.length > 0 && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearComparison}
              className="shrink-0"
            >
              Очистить сравнение
            </Button>
          )}
        </div>

        <ComparisonTable schools={selectedSchools} />

        {selectedSchools.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto space-y-4">
              <GitCompare className="h-16 w-16 text-muted-foreground mx-auto" />
              <h2 className="text-2xl font-semibold">Выберите школы для сравнения</h2>
              <p className="text-muted-foreground">
                Вернитесь на главную страницу и выберите до 3 школ для детального сравнения
              </p>
              <Button onClick={() => navigate('/')}>
                Перейти к рейтингу
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Compare;