import React, { createContext, useContext, useState, useEffect } from 'react';
import { School } from '@/types/school';

interface ComparisonContextType {
  selectedSchools: School[];
  addToComparison: (school: School) => void;
  removeFromComparison: (schoolId: string) => void;
  clearComparison: () => void;
  isInComparison: (schoolId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

const MAX_COMPARISON_SCHOOLS = 3;

export const ComparisonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSchools, setSelectedSchools] = useState<School[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('comparison-schools');
    if (saved) {
      try {
        setSelectedSchools(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load comparison schools from localStorage');
      }
    }
  }, []);

  // Save to localStorage when selectedSchools changes
  useEffect(() => {
    localStorage.setItem('comparison-schools', JSON.stringify(selectedSchools));
  }, [selectedSchools]);

  const addToComparison = (school: School) => {
    setSelectedSchools(prev => {
      if (prev.length >= MAX_COMPARISON_SCHOOLS) {
        return prev;
      }
      if (prev.some(s => s.id === school.id)) {
        return prev;
      }
      return [...prev, school];
    });
  };

  const removeFromComparison = (schoolId: string) => {
    setSelectedSchools(prev => prev.filter(school => school.id !== schoolId));
  };

  const clearComparison = () => {
    setSelectedSchools([]);
  };

  const isInComparison = (schoolId: string) => {
    return selectedSchools.some(school => school.id === schoolId);
  };

  return (
    <ComparisonContext.Provider value={{
      selectedSchools,
      addToComparison,
      removeFromComparison,
      clearComparison,
      isInComparison
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};