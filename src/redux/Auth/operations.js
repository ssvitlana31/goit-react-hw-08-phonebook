import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { API } from 'redux/Contacts/operations';

const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(`Try again!`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(`Password or email is not valid!`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const { data } = await API.post('users/logout');
    clearToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().user.token;
  if (!savedToken) {
    return thunkAPI.rejectWithValue('Token is not exist');
  }
  try {
    setToken(savedToken);
    const { data } = await API.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
