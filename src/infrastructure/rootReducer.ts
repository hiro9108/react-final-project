import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './store/users/userSlice';
import dataReducer from './store/data/dataSlice';

const rootRecuder = combineReducers({
  user: userReducer,
  data: dataReducer,
});

export default rootRecuder;
