import React from 'react';
import { School } from '@/types/school';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import { Clock, Users, Award, CheckCircle, Calendar, Building } from 'lucide-react';

interface SchoolDetailModalProps {
  school: School | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SchoolDetailModal: React.FC<SchoolDetailModalProps> = ({
  school,
  open,
  onOpenChange,
}) => {
  if (!school) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
              #{school.rank}
            </div>
            <div>
              <DialogTitle className="text-2xl">{school.name}</DialogTitle>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={school.rating} size="sm" />
                <span className="text-sm text-muted-foreground">
                  ({school.reviewCount} отзывов)
                </span>
              </div>
            </div>
          </div>
          <DialogDescription className="text-base leading-relaxed">
            {school.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Основная информация */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Возраст:</span>
              <span className="text-sm text-muted-foreground">{school.ageRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Стоимость:</span>
              <span className="text-sm text-muted-foreground">
                от {school.price.min.toLocaleString('ru')} {school.price.currency}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Основана:</span>
              <span className="text-sm text-muted-foreground">{school.establishedYear} год</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Учеников:</span>
              <span className="text-sm text-muted-foreground">{school.studentCount.toLocaleString('ru')}</span>
            </div>
          </div>

          {/* Доступные возможности */}
          <div className="flex gap-4">
            {school.trialAvailable && (
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-success">Пробный урок</span>
              </div>
            )}
            {school.certificates && (
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm text-accent">Сертификаты</span>
              </div>
            )}
            <Badge variant="secondary" className="font-medium">
              {school.format === 'online' ? 'Онлайн' : 
               school.format === 'offline' ? 'Офлайн' : 'Гибрид'}
            </Badge>
          </div>

          {/* Курсы */}
          <div className="space-y-3">
            <h4 className="font-semibold text-card-foreground">Доступные курсы:</h4>
            <div className="flex flex-wrap gap-2">
              {school.courses.map((course, index) => (
                <Badge key={index} variant="outline">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Особенности */}
          <div className="space-y-3">
            <h4 className="font-semibold text-card-foreground">Особенности школы:</h4>
            <div className="flex flex-wrap gap-2">
              {school.specialFeatures.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};