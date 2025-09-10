import React from 'react';
import { School } from '@/types/school';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/star-rating';
import { Clock, Users, Award, Globe, CheckCircle, Crown } from 'lucide-react';

interface ComparisonTableProps {
  schools: School[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ schools }) => {
  if (schools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Выберите школы для сравнения</p>
      </div>
    );
  }

  const findBestPrice = () => {
    return Math.min(...schools.map(s => s.price.min));
  };

  const findHighestRating = () => {
    return Math.max(...schools.map(s => s.rating));
  };

  const bestPrice = findBestPrice();
  const highestRating = findHighestRating();

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full">
        {schools.map((school) => (
          <Card key={school.id} className="relative">
            {school.rating === highestRating && (
              <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <Crown className="h-4 w-4" />
              </div>
            )}
            
            <CardHeader className="pb-4">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary font-bold text-xl">
                  #{school.rank}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{school.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <StarRating rating={school.rating} size="sm" />
                    <span className="text-sm text-muted-foreground">
                      ({school.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Формат:</span>
                  <Badge variant="secondary">
                    {school.format === 'online' ? 'Онлайн' : 
                     school.format === 'offline' ? 'Офлайн' : 'Гибрид'}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Возраст:</span>
                  <span className="font-medium">{school.ageRange}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Цена:</span>
                  <div className="text-right">
                    <div className="font-medium flex items-center gap-1">
                      {school.price.min === bestPrice && (
                        <Crown className="h-3 w-3 text-success" />
                      )}
                      {school.price.min.toLocaleString('ru')} - {school.price.max.toLocaleString('ru')} {school.price.currency}
                    </div>
                    <div className="text-xs text-muted-foreground">в месяц</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Студентов:</span>
                  <span className="font-medium">{school.studentCount?.toLocaleString('ru') || 'Н/Д'}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Основана:</span>
                  <span className="font-medium">{school.establishedYear}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Особенности:</h4>
                <div className="flex items-center justify-center gap-4 text-xs">
                  {school.trialAvailable && (
                    <div className="flex items-center gap-1 text-success">
                      <CheckCircle className="h-3 w-3" />
                      <span>Пробный урок</span>
                    </div>
                  )}
                  {school.certificates && (
                    <div className="flex items-center gap-1 text-accent">
                      <Award className="h-3 w-3" />
                      <span>Сертификаты</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Курсы:</h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {school.courses.slice(0, 3).map((course, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                  {school.courses.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{school.courses.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Преимущества:</h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {school.specialFeatures.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(school.website, '_blank')}
                >
                  <Globe className="h-3 w-3 mr-1" />
                  Перейти на сайт
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};