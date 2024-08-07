import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppModel } from './_model';

const initialState: AppModel = {
  isLoading: false,
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
