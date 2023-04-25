import axios from 'axios';
import { baseURL } from './constants';

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
