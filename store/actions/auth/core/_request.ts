'use client';
import { axiosAuthInstance } from '@/api';
import { AxiosResponse } from 'axios';
import { LoginModel } from './_model';

export const fetchLogin = async (data: LoginModel): Promise<string> => {
  try {
    const res: AxiosResponse = await axiosAuthInstance.post('/security/createToken', data);
    return res.data;
  } catch (e: any) {
    return Promise.reject(new Error(e));
  }
};
