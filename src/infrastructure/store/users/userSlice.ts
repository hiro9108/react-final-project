import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    updateName: (state, action) => {
      state.currentUser = 'I am John!!!';
    },
  },
});

export const { login, logout, updateName } = userSlice.actions;
export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;
