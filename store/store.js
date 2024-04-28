import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import getUserSlice from './person/getUserSlice';
import postSlice from './home/postSlice';
import commentSlice from './home/commentSlice';
import likeSlice from './home/likeSlice';
import searchUserSlice from './search/searchUserSlice';
import postUserSlice from './search/postUserSlice';
import chatUserSlice from './chat/chatUserSlice';
import chatMsgSlice from './chat/chatMsgSlice';
import followSlice from './search/followSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    comment: commentSlice,
    like: likeSlice,
    searchUser: searchUserSlice,
    postUser: postUserSlice, 
    chatUser: chatUserSlice,
    chatMsg: chatMsgSlice,
    follow: followSlice,

    getUser: getUserSlice,
  },
});

export default store;