import { CareerHistoryCollectionResult } from '@/services/useExperience';

export function getUniqueCompanies(data: CareerHistoryCollectionResult | undefined) {

  if (!data) return [];

  const { careerHistoryCollection: { items } }  = data;

  return Array.from(
    new Set(
      items.map((item) => item.companyName)
    )
  );
}