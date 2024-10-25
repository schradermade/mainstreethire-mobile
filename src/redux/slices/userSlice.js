import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  lat: '',
  lng: '',
  phone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    clearUserInfo: () => {
      initialState;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
