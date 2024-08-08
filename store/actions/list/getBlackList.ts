import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBlackList } from './core/_request';
import { ListDetailRequestModel } from './core/_model';

export const getBlackList = createAsyncThunk(
  'list/blackList',
  async (filter: ListDetailRequestModel, { rejectWithValue }) => {
    try {
      const token = await fetchBlackList(filter);
      return token;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default getBlackList;
