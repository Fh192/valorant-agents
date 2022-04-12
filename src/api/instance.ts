import axios from 'axios';

export interface ServerResponse<T> {
  status: 200 | 400 | 404;
  error?: string;
  data: T;
}

export const api = axios.create({
  baseURL: 'https://valorant-api.com/v1/',
});
