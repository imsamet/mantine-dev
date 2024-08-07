'use client';
import axios from 'axios';

const BASE_URL = 'https://service.rmosweb.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`;

export default axiosInstance;
