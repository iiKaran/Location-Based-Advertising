import {configureStore} from '@reduxjs/toolkit';
import HomeSlice from './Slices/HomeSlice';
import UserSlice from './Slices/UserSlice'

export const store = configureStore({
  reducer: {
    home: HomeSlice,
    user:UserSlice,
  },
});