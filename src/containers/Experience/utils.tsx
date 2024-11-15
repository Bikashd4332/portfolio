import { CareerHistoryCollectionResult } from '@/services/useExperience';
import { CareerHistory } from './CareerHistory';

export function getUniqueCompanies(data: CareerHistoryCollectionResult | undefined) {

  if (!data) {
    return [];
  }

  const { careerHistoryCollection: { items } }  = data;

  return Array.from(
    new Set(
      items.map((item) => item.companyName)
    )
  );
}

export function prepareCareerTabPanels(data: CareerHistoryCollectionResult | undefined) {
  if (!data) return [];

  return getUniqueCompanies(data).map((companyName) => {
    const careerHistoryGroup = data.careerHistoryCollection.items
      .filter(item => item.companyName === companyName);

    const combinedWorkLogs = careerHistoryGroup
      .map(history => history.workLogs.items)
      .flat();

    return <CareerHistory
      key={companyName} 
      {...careerHistoryGroup[0]} 
      workLogs={{ items: combinedWorkLogs }}
    />;
  });
}