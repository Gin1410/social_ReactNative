import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import getPostsSlice from './home/getPostsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    getUser: getUserSlice,
    getPosts: getPostsSlice,
  },
});

export default store;