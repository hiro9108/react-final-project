import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './store/users/userSlice';

const rootRecuder = combineReducers({
  user: userReducer,
});

export default rootRecuder;
