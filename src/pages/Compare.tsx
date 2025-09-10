import React from 'react';
import { useComparison } from '@/contexts/ComparisonContext';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GitCompare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Compare: React.FC = () => {
  const { selectedSchools, clearComparison } = useComparison();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к рейтингу
            </Button>
            <div className="flex items-center gap-2">
              <GitCompare className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Сравнение школ</h1>
            </div>
          </div>
          
          {selectedSchools.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearComparison}
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
    </div>
  );
};

export default Compare;