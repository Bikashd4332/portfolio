import { CareerHistoryCollectionResult } from '@/services/useExperience';

export function getUniqueCompanies(data: CareerHistoryCollectionResult | undefined) {

  if (!data) {

  const { careerHistoryCollection: { items } }  = data;

  return Array.from(
    new Set(
      items.map((item) => item.companyName)
    )
  );
}