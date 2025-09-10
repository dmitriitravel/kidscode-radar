export interface School {
  id: string;
  name: string;
  logo?: string;
  description: string;
  rating: number;
  reviewCount: number;
  ageRange: string;
  courses: string[];
  format: 'online' | 'offline' | 'hybrid';
  price: {
    min: number;
    max: number;
    currency: string;
    period: 'month' | 'course' | 'lesson';
  };
  specialFeatures: string[];
  website: string;
  establishedYear: number;
  studentCount?: number;
  trialAvailable: boolean;
  certificates: boolean;
  rank: number;
}

export interface Review {
  id: string;
  schoolId: string;
  authorName: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  date: string;
  verified: boolean;
}