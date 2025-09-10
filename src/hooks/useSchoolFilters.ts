import { useState, useMemo, useCallback } from 'react';
import { School } from '@/types/school';

export interface FilterState {
  ageGroups: string[];
  languages: string[];
  priceRange: string[];
  features: string[];
}

export const useSchoolFilters = (schools: School[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    ageGroups: [],
    languages: [],
    priceRange: [],
    features: []
  });

  const toggleFilter = useCallback((category: keyof FilterState, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setActiveFilters({
      ageGroups: [],
      languages: [],
      priceRange: [],
      features: []
    });
    setSearchQuery('');
  }, []);

  const filteredSchools = useMemo(() => {
    let filtered = schools;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(school =>
        school.name.toLowerCase().includes(query) ||
        school.description.toLowerCase().includes(query) ||
        school.courses.some(course => course.toLowerCase().includes(query)) ||
        school.specialFeatures.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Age group filter
    if (activeFilters.ageGroups.length > 0) {
      filtered = filtered.filter(school => {
        return activeFilters.ageGroups.some(ageGroup => {
          // Parse school age range (e.g., "8-17 лет" -> min: 8, max: 17)
          const ageRangeMatch = school.ageRange.match(/(\d+)-(\d+)/);
          if (!ageRangeMatch) return false;
          
          const schoolMinAge = parseInt(ageRangeMatch[1]);
          const schoolMaxAge = parseInt(ageRangeMatch[2]);
          
          switch (ageGroup) {
            case '6-10 лет':
              // Check if school age range overlaps with 6-10
              return schoolMinAge <= 10 && schoolMaxAge >= 6;
            case '11-14 лет':
              // Check if school age range overlaps with 11-14
              return schoolMinAge <= 14 && schoolMaxAge >= 11;
            case '15+ лет':
              // Check if school age range includes 15+
              return schoolMaxAge >= 15;
            default:
              return false;
          }
        });
      });
    }

    // Language filter
    if (activeFilters.languages.length > 0) {
      filtered = filtered.filter(school =>
        activeFilters.languages.some(lang =>
          school.courses.some(course => course.toLowerCase().includes(lang.toLowerCase()))
        )
      );
    }

    // Price filter
    if (activeFilters.priceRange.length > 0) {
      filtered = filtered.filter(school => {
        return activeFilters.priceRange.some(range => {
          if (range === 'До 5000₽') {
            return school.price.min <= 5000;
          }
          return false;
        });
      });
    }

    // Features filter
    if (activeFilters.features.length > 0) {
      filtered = filtered.filter(school => {
        return activeFilters.features.some(feature => {
          if (feature === 'Пробный урок') {
            return school.trialAvailable;
          }
          return false;
        });
      });
    }

    return filtered;
  }, [schools, searchQuery, activeFilters]);

  const hasActiveFilters = useMemo(() => {
    return searchQuery.trim() !== '' || 
           Object.values(activeFilters).some(arr => arr.length > 0);
  }, [searchQuery, activeFilters]);

  return {
    searchQuery,
    setSearchQuery,
    activeFilters,
    toggleFilter,
    clearFilters,
    filteredSchools,
    hasActiveFilters,
    resultsCount: filteredSchools.length
  };
};