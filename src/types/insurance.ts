export interface Insurance {
  id: number;
  company: string;
  cover: string;
  basePremium: number;
  salaryRange: number[];
  totalPremium?: number;
  peopleAdded?: Array<{
    id: number;
    age: number;
    ageGroup: string;
    premiumMultiplier: number;
  }>;
  description: string;
  coverageLimit: number;
  deductible: number;
  coPay: string;
  waitingPeriod: string;
  additionalBenefits?: string[];
  networkHospitals?: string[];
  claimProcess?: string;
  eligibilityCriteria?: string;
  policyTerm?: string;
  customerRating?: number;
  reviews?: Array<{
    reviewer: string;
    rating: number;
    comment: string;
  }>;
}
