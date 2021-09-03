import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/api.js';

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, { rejectWithValue }) => {
    try {
      const registredUser = await api.postSignUp(newUser);
      return registredUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const loggedInUser = await api.postLogIn(user);
      return loggedInUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const loggedOutUser = await api.postLogOut(credentials);
      return loggedOutUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      api.token.set(persistedToken);

      const currentUser = await api.getCurrentUser();
      return currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
