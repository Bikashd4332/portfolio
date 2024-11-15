import { FetchConfig } from '@/providers/SWRProvider/types';
import { gql } from 'graphql-request';
import useSWR from 'swr';

export interface AboutMySelfCollectionResult {
  aboutMyselfCollection:  {
    items: Array<AboutMySelf>;
  }
}

export interface TechSkill {
    technologies: Array<string>;
}

export interface AboutMySelf {
  aboutMe: string;
  profileImage: {
    url: string;
  }
  techSkill: TechSkill
}

export interface PortfolioHeroSection {
  introductionLine: string;
  name: string;
  summary: string;
  heroText: string;
}

export function useAboutMe() {
  const query = gql`
    query {
      aboutMyselfCollection {
        items {
          aboutMe
          techSkill {
            ...TechSkills
          }
          profileImage {
            url
          }
        }
      }
    }

    fragment TechSkills on TechSkills {
      technologies
    }
  `;

  return useSWR<AboutMySelfCollectionResult, Error, FetchConfig>({ target: query, type: 'content'});
}