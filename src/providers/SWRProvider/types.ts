type FetchType = 'content' | 'service';

export interface FetchConfig<T extends object = object>{
  type: FetchType,
  target: string
  variables?: T
}