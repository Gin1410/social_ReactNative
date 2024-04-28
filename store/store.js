import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import getPostsSlice from './home/getPostsSlice';
import getCmtsSlice from './home/getCmtsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    getUser: getUserSlice,
    getPosts: getPostsSlice,
    getCmts: getCmtsSlice,
  },
});

export default store;