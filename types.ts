
export enum ServiceLevel {
  Proofreading = 'Proofreading',
  Copyediting = 'Copyediting',
  Developmental = 'Developmental',
  Formatting = 'Referencing & Formatting'
}

export interface PricingPlan {
  id: string;
  name: ServiceLevel;
  ratePerWord: number;
  description: string;
  features: string[];
}

export interface TurnaroundTier {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  discipline: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
