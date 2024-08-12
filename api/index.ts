'use client';
import axios from 'axios';

const AUTH_BASE_URL = 'https://service.rmosweb.com';
const BASE_URL = 'https://frontapi.rmosweb.com/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
const axiosAuthInstance = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 100000,
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosAuthInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export { axiosInstance, axiosAuthInstance };
