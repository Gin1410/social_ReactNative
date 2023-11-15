import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import getCmtsSlice from './home/getCmtsSlice';
import getLikesSlice from './home/getLikesSlice';
import addLikeSlice from './home/addLikeSlice';
import postSlice from './home/postSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,

    getUser: getUserSlice,
    getCmts: getCmtsSlice,
    getLikes: getLikesSlice,
    addLike: addLikeSlice,
  },
});

export default store;