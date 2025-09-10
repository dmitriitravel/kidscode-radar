import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = true,
  className
}) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex gap-0.5">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          const filled = starValue <= rating;
          const partialFill = starValue > rating && starValue - 1 < rating;
          
          return (
            <Star
              key={index}
              className={cn(
                sizeClasses[size],
                filled 
                  ? 'fill-accent text-accent' 
                  : partialFill
                  ? 'fill-accent/50 text-accent'
                  : 'fill-muted text-muted'
              )}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className={cn('font-medium text-foreground', textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};