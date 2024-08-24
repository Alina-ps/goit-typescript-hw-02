import { Result } from '../components/App/App.types';

export interface Response {
  total: number;
  results: Result[];
}

export interface Params {
  query: string;
  page?: number;
  per_page?: number;
  client_id?: string;
}
