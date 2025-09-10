import { useState, useMemo, useCallback } from 'react';
import { School } from '@/types/school';

export interface FilterState {
  ages: string[];
  languages: string[];
  formats: string[];
}

export const useSchoolFilters = (schools: School[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    ages: [],
    languages: [],
    formats: []
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
      ages: [],
      languages: [],
      formats: []
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

    // Age filter
    if (activeFilters.ages.length > 0) {
      filtered = filtered.filter(school => {
        return activeFilters.ages.some(age => {
          // Parse school age range (e.g., "8-17 лет" -> min: 8, max: 17)
          const ageRangeMatch = school.ageRange.match(/(\d+)[-+]?(\d+)?/);
          if (!ageRangeMatch) return false;
          
          const schoolMinAge = parseInt(ageRangeMatch[1]);
          const schoolMaxAge = ageRangeMatch[2] ? parseInt(ageRangeMatch[2]) : 18;
          
          const targetAge = parseInt(age);
          return schoolMinAge <= targetAge && schoolMaxAge >= targetAge;
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

    // Format filter
    if (activeFilters.formats.length > 0) {
      filtered = filtered.filter(school =>
        activeFilters.formats.includes(school.format)
      );
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