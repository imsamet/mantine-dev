'use client';
import { axiosInstance } from '@/api';
import { AxiosResponse } from 'axios';
import {
  AddBlackListRequestModal,
  AddBlackListResponse,
  BlackListResponse,
  ListDetailRequestModel,
  ListFilterModel,
  ListResponse,
} from './_model';

export const fetchList = async (filter: ListFilterModel): Promise<ListResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/Procedure/StpRmforKlasik_2', filter);
    return res.data;
  } catch (e: any) {
    return Promise.reject(new Error(e));
  }
};
export const fetchBlackList = async (filter: ListDetailRequestModel): Promise<BlackListResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/Kara/Getir_Kod', filter);
    return res.data;
  } catch (e: any) {
    return Promise.reject(new Error(e));
  }
};
export const fetchAddBlackList = async (add: AddBlackListRequestModal): Promise<AddBlackListResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/Kara/Ekle', add);
    return res.data;
  } catch (e: any) {
    return Promise.reject(new Error(e));
  }
};
