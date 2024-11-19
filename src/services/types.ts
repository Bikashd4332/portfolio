export interface Asset {
  url: string;
  fileName: string;
  contentType: string;
}

export interface Collection<T> {
  items: Array<T>;
}
