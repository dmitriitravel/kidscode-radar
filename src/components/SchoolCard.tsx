import React, { useState } from 'react';
import { School } from '@/types/school';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/star-rating';
import { Clock, Users, Award, CheckCircle, GitCompare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useComparison } from '@/contexts/ComparisonContext';
import { SchoolDetailModal } from '@/components/SchoolDetailModal';

interface SchoolCardProps {
  school: School;
  className?: string;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school, className }) => {
  const { addToComparison, removeFromComparison, isInComparison } = useComparison();
  const [showModal, setShowModal] = useState(false);
  const inComparison = isInComparison(school.id);

  const handleCompareClick = () => {
    if (inComparison) {
      removeFromComparison(school.id);
    } else {
      addToComparison(school);
    }
  };

  const handleDetailsClick = () => {
    if (school.name !== 'Skysmart Pro') {
      setShowModal(true);
    }
  };
  return (
    <Card className={cn(
      'bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-border/50',
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
              #{school.rank}
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground">{school.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={school.rating} size="sm" />
                <span className="text-sm text-muted-foreground">
                  ({school.reviewCount} отзывов)
                </span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="font-medium">
            {school.format === 'online' ? 'Онлайн' : 
             school.format === 'offline' ? 'Офлайн' : 'Гибрид'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {school.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{school.ageRange}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              {school.price.min.toLocaleString('ru')} - {school.price.max.toLocaleString('ru')} {school.price.currency}
            </span>
          </div>
          {school.trialAvailable && (
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-muted-foreground">Пробный урок</span>
            </div>
          )}
          {school.certificates && (
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Сертификаты</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-card-foreground">Курсы:</h4>
          <div className="flex flex-wrap gap-1">
            {school.courses.slice(0, 4).map((course, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
            {school.courses.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{school.courses.length - 4}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-card-foreground">Особенности:</h4>
          <div className="flex flex-wrap gap-1">
            {school.specialFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {school.name === 'Skysmart Pro' ? (
            <a 
              href="https://programmirovanie.skysmart.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
            >
              Подробнее
            </a>
          ) : (
            <Button variant="default" size="sm" className="flex-1" onClick={handleDetailsClick}>
              Подробнее
            </Button>
          )}
          <Button 
            variant={inComparison ? "secondary" : "outline"} 
            size="sm" 
            className="flex items-center gap-1"
            onClick={handleCompareClick}
          >
            <GitCompare className="h-3 w-3" />
            {inComparison ? 'Добавлено' : 'Добавить к сравнению'}
          </Button>
        </div>
      </CardContent>
      
      <SchoolDetailModal 
        school={school}
        open={showModal}
        onOpenChange={setShowModal}
      />
    </Card>
  );
};