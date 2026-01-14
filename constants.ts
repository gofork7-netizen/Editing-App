
import { ServiceLevel, PricingPlan, TurnaroundTier, Testimonial, FAQ } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'proofreading',
    name: ServiceLevel.Proofreading,
    ratePerWord: 0.012,
    description: 'Final-stage polish for drafts close to submission.',
    features: [
      'Grammar & Spelling',
      'Punctuation & Typos',
      'Typographic Consistency',
      'Basic Formatting Check'
    ]
  },
  {
    id: 'copyediting',
    name: ServiceLevel.Copyediting,
    ratePerWord: 0.025,
    description: 'Line-level refinement for clarity and academic tone.',
    features: [
      'Clarity & Flow',
      'Sentence-level Accuracy',
      'Style-guide Compliance',
      'Coherence & Cohesion'
    ]
  },
  {
    id: 'developmental',
    name: ServiceLevel.Developmental,
    ratePerWord: 0.045,
    description: 'Substantive structural and argumentative editing.',
    features: [
      'Argument Architecture',
      'Logical Sequencing',
      'Gaps & Redundancy Analysis',
      'Detailed Editorial Memo'
    ]
  },
  {
    id: 'formatting',
    name: ServiceLevel.Formatting,
    ratePerWord: 0.008,
    description: 'Specialized style-guide alignment and referencing.',
    features: [
      'Reference List Normalization',
      'In-text Citation Check',
      'Heading Hierarchy',
      'Table/Figure Alignment'
    ]
  }
];

export const TURNAROUND_TIERS: TurnaroundTier[] = [
  { id: 'standard', name: 'Standard (7-10 Days)', multiplier: 1.0, description: 'Best value for relaxed deadlines.' },
  { id: 'express', name: 'Express (3-5 Days)', multiplier: 1.3, description: 'Priority handling for upcoming deadlines.' },
  { id: 'rush', name: 'Rush (24-48 Hours)', multiplier: 1.8, description: 'Guaranteed urgent turnaround.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "The structural editing transformed my thesis from a collection of chapters into a cohesive argument. Highly recommended.",
    author: "Dr. Sarah Chen",
    role: "PhD Graduate",
    discipline: "Sociology"
  },
  {
    id: '2',
    quote: "Meticulous attention to APA style. My supervisor was impressed with the clarity of the final draft.",
    author: "James Miller",
    role: "Master's Candidate",
    discipline: "Psychology"
  },
  {
    id: '3',
    quote: "Fast turnaround and professional communication. The Track Changes notes were incredibly helpful for my future writing.",
    author: "Elena Rodriguez",
    role: "Research Fellow",
    discipline: "Biomedical Science"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What's the difference between proofreading and copyediting?",
    answer: "Proofreading is the final stage, focusing on surface-level errors (grammar, typos). Copyediting is deeper, improving sentence structure, flow, and academic tone."
  },
  {
    question: "Do you follow APA/MLA/Chicago/OSCOLA exactly?",
    answer: "Yes, I maintain rigorous control over style-guide requirements including citations, bibliography, and formatting hierarchy."
  },
  {
    question: "Do you work with non-native English writers?",
    answer: "Absolutely. I specialize in ensuring clarity and academic register while preserving your unique meaning and voice."
  },
  {
    question: "How do you handle confidentiality?",
    answer: "Your work is treated with the highest level of privacy. I sign non-disclosure agreements and use secure data handling practices."
  }
];
