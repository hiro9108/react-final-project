import { configureStore } from '@reduxjs/toolkit';

import rootRecuder from './rootReducer';

export const store = configureStore({
  reducer: rootRecuder,
});
