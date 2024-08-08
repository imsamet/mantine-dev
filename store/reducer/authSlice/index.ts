'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthModel } from './_model';
import login from '@/store/actions/auth/login';

const initialState: AuthModel = {
  session: null,
};
export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<string>) => {
      state.session = action.payload;
    },
    logout: state => {
      localStorage.removeItem('token');
      state.session = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.session = action.payload;
    });
  },
});

export const { setSession, logout } = userSlice.actions;
export default userSlice.reducer;
