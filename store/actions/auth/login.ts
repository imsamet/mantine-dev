import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin } from './core/_request';
import { LoginModel } from './core/_model';

export const login = createAsyncThunk('auth/login', async (data: LoginModel, { rejectWithValue }) => {
  try {
    const token = await fetchLogin(data);
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default login;
