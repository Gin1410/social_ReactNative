import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getPostReducer from './home/getPostSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    getPost: getPostReducer,
  },
});

export default store;