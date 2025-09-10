import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { StarRating } from '@/components/ui/star-rating';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Review } from '@/types/school';
import { schools } from '@/data/schools';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const school = schools.find(s => s.id === review.schoolId);
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1">{review.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={review.rating} size="sm" showNumber={false} />
              <span className="text-sm text-muted-foreground">{review.rating}/5</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{review.authorName}</span>
              {review.verified && (
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="h-3 w-3" />
                  <span className="text-xs">Проверено</span>
                </div>
              )}
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {school?.name}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {review.content}
        </p>
        
        {review.pros.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Плюсы</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {review.pros.map((pro, index) => (
                <li key={index}>• {pro}</li>
              ))}
            </ul>
          </div>
        )}
        
        {review.cons.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsDown className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Минусы</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {review.cons.map((con, index) => (
                <li key={index}>• {con}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="text-xs text-muted-foreground mt-4">
          {new Date(review.date).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </CardContent>
    </Card>
  );
};