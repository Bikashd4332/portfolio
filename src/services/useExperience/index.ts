
import { FetchConfig } from '@/providers/SWRProvider/types';
import { gql } from 'graphql-request';
import useSWR from 'swr';

export interface CareerHistoryCollectionResult {
  careerHistoryCollection:  {
    items: Array<CareerHistory>;
  }
}

export interface CareerHistory {
  companyName: string;
  jobTitle: string;
  workDuration: string;
  workLogs: WorkLogs;
  workedAs: string;
  companyLogo: {
    url: string;
  }
}

export interface WorkLogs {
  items: Array<{
    project?: string;
    achievements: Array<string>;
  }>;
}

export function useExperience() {
  const query = gql`
    query {
      careerHistoryCollection {
        items {
          companyName
          workDuration
          workedAs
          companyLogo {
            url
          }
          workLogs: workLogsCollection {
            items {
            ...WorkLog
            }
          }
        }
      }
    }

    fragment WorkLog on WorkLog {
      project
      achievements
    }
  `;

  return useSWR<CareerHistoryCollectionResult, Error, FetchConfig>({ target: query, type: 'content'});
}