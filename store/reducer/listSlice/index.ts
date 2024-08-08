import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListModel } from './_model';
import getList from '@/store/actions/list/filter';
import { BlackListResponse, ListResponse } from '@/store/actions/list/core/_model';
import getBlackList from '@/store/actions/list/getBlackList';

const initialState: ListModel = {
  list: [],
  blackList: [],
};
export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setList: state => {},
  },
  extraReducers: builder => {
    builder.addCase(getList.fulfilled, (state, action: PayloadAction<ListResponse>) => {
      state.list = action.payload.value;
    });
    builder.addCase(getBlackList.fulfilled, (state, action: PayloadAction<BlackListResponse>) => {
      state.blackList = action.payload.value;
    });
  },
});

export const { setList } = userSlice.actions;
export default userSlice.reducer;
