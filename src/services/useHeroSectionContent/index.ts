import { FetchConfig } from '@/providers/SWRProvider/types';
import { gql } from 'graphql-request';
import useSWR from 'swr';

export interface PortfolioHeroCollectionResult {
  portfolioHeroSectionCollection:  {
    items: Array<PortfolioHeroSection>;
  }
}

export interface PortfolioHeroSection {
  introductionLine: string;
  name: string;
  summary: string;
  heroText: string;
}


export const useHeroSectionContent = () => {
  const query = gql`
    query {
      portfolioHeroSectionCollection {
        items {
          introductionLine
          name
          summary
          heroText
        }
      }
    }
  `;

  return useSWR<PortfolioHeroCollectionResult, Error, FetchConfig>({
    target: query,
    type: 'content'
  });
};