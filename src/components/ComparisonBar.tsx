import React from 'react';
import { useComparison } from '@/contexts/ComparisonContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, GitCompare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const ComparisonBar: React.FC = () => {
  const { selectedSchools, removeFromComparison, clearComparison } = useComparison();
  const navigate = useNavigate();

  if (selectedSchools.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-card-foreground">
                Сравнение ({selectedSchools.length}/3)
              </span>
            </div>
            
            <div className="flex gap-2 flex-1 overflow-x-auto">
              {selectedSchools.map((school) => (
                <Badge
                  key={school.id}
                  variant="secondary"
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  <span className="truncate max-w-32">{school.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => removeFromComparison(school.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearComparison}
              className="whitespace-nowrap"
            >
              Очистить
            </Button>
            <Button
              onClick={() => navigate('/compare')}
              size="sm"
              className="whitespace-nowrap"
            >
              Сравнить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};