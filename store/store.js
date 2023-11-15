import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import addLikeSlice from './home/addLikeSlice';
import postSlice from './home/postSlice';
import commentSlice from './home/commentSlice';
import likeSlice from './home/likeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    comment: commentSlice,
    like: likeSlice,

    
    getUser: getUserSlice,
    addLike: addLikeSlice,
  },
});

export default store;