import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddBlackList } from './core/_request';
import { AddBlackListRequestModal } from './core/_model';

export const addBlackList = createAsyncThunk(
  'list/addBlackList',
  async (filter: AddBlackListRequestModal, { rejectWithValue }) => {
    try {
      const token = await fetchAddBlackList(filter);
      return token;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default addBlackList;
