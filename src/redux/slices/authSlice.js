import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      state.email = action.payload.email || state.email;
      state.password = action.payload.password || state.password;
    },
    clearLoginInfo: (state) => {
      state.email = '';
      state.password = '';
      state.firstName = '';
      state.lastName = '';
    },
    setSignupInfo: (state, action) => {
      state.email = action.payload.email || state.email;
      state.password = action.payload.password || state.password;
      state.firstName = action.payload.firstName || state.firstName;
      state.lastName = action.payload.lastName || state.lastName;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoginInfo,
  setSignupInfo,
  setAccessToken,
  startLoading,
  stopLoading,
  setError,
  clearLoginInfo,
} = authSlice.actions;

export default authSlice.reducer;
