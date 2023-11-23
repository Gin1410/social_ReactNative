import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import postSlice from './home/postSlice';
import commentSlice from './home/commentSlice';
import likeSlice from './home/likeSlice';
import searchUserSlice from './search/searchUserSlice';
import postUserSlice from './search/postUserSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    comment: commentSlice,
    like: likeSlice,
    searchUser: searchUserSlice,
    postUser: postUserSlice, 

    getUser: getUserSlice,
  },
});

export default store;