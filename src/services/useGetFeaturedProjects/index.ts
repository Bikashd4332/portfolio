import { FetchConfig } from '@/providers/SWRProvider/types';
import { gql } from 'graphql-request';
import useSWR from 'swr';
import { Asset, Collection } from '../types';

export type FeaturedProjectCollectionResult = {
  featuredProjectCollection: Collection<FeaturedProject>;
};

export interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  techStack: Array<string>;
  projectImagesCollection: Collection<Asset>;
}

export function useGetFeaturedProjects() {
  const query = gql`
    query {
      featuredProjectCollection {
        items {
          name
          description
          techStack
          projectImagesCollection {
            items {
              url
            }
          }
        }
      }
    }
  `;

  return useSWR<FeaturedProjectCollectionResult, Error, FetchConfig>({
    target: query,
    type: 'content',
  });
}
