import { FetchConfig } from '@/providers/SWRProvider/types';
import { gql } from 'graphql-request';
import useSWR from 'swr';
import { Asset } from '../types';

type Resume = {
  asset: Asset;
};

export function useResume() {
  const query = gql`
    query {
      asset(id: "6XcutxGcJj95QE3NoR9JWl") {
        url
        fileName
        contentType
      }
    }
  `;

  return useSWR<Resume, Error, FetchConfig>({ target: query, type: 'content' });
}
