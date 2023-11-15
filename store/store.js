import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import getLikesSlice from './home/getLikesSlice';
import addLikeSlice from './home/addLikeSlice';
import postSlice from './home/postSlice';
import commentSlice from './home/commentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    comment: commentSlice,

    
    getUser: getUserSlice,

    getLikes: getLikesSlice,
    addLike: addLikeSlice,
  },
});

export default store;