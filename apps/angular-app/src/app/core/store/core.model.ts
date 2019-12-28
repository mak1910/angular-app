export interface RestContainer<T> {
  data: T;
  loading: boolean;
  errorMessage?: string;
}

export interface User {
  id: number;
  name: string;
}
