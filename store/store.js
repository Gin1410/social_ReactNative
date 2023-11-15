import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import getPostsSlice from './home/getPostsSlice';
import getCmtsSlice from './home/getCmtsSlice';
import getLikesSlice from './home/getLikesSlice';
import addLikeSlice from './home/addLikeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    getUser: getUserSlice,
    getPosts: getPostsSlice,
    getCmts: getCmtsSlice,
    getLikes: getLikesSlice,
    addLike: addLikeSlice,
  },
});

export default store;