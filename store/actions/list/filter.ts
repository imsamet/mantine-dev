import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchList } from './core/_request';
import { ListFilterModel } from './core/_model';

export const getList = createAsyncThunk('list/filter', async (filter: ListFilterModel, { rejectWithValue }) => {
  try {
    const token = await fetchList(filter);
    return token;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default getList;
