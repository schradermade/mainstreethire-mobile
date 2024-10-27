import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import spottiReducer from './slices/spottiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    spotti: spottiReducer,
  },
});

export default store;
