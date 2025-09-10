import React, { useState, useMemo } from 'react';
import { ReviewCard } from './ReviewCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { reviews } from '@/data/schools';
import { schools } from '@/data/schools';
import { MessageSquare } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('all');
  const [showMore, setShowMore] = useState(false);

  const filteredReviews = useMemo(() => {
    if (selectedSchoolId === 'all') {
      return reviews;
    }
    return reviews.filter(review => review.schoolId === selectedSchoolId);
  }, [selectedSchoolId]);

  const displayedReviews = showMore ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Отзывы родителей</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что думают другие родители о школах программирования для детей
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center">
            <Select value={selectedSchoolId} onValueChange={setSelectedSchoolId}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Выберите школу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все школы</SelectItem>
                {schools.map(school => (
                  <SelectItem key={school.id} value={school.id}>
                    {school.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {displayedReviews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {filteredReviews.length > 6 && (
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowMore(!showMore)}
                  className="min-w-40"
                >
                  {showMore ? 'Показать меньше' : `Показать ещё ${filteredReviews.length - 6} отзывов`}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Отзывы для выбранной школы не найдены
            </p>
          </div>
        )}
      </div>
    </section>
  );
};