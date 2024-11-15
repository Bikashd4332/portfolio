import { request } from 'graphql-request';
import { FetchConfig } from './types';

export function fetcher(config: FetchConfig) {
  const { target, type, variables } = config;

  const isContentful = type === 'content'

  const contentfulHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN}`,
  }
  const contentfulEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(isContentful && contentfulHeaders),
  }

  if (isContentful) {
    return request(contentfulEndpoint, target, variables, headers)
  }

  return fetch(target)
}