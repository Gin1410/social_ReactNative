// postUserSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';


const postUserSlice = createSlice({
  name: 'postUser',
  initialState: {
    user: null,
    posts: [],
    error: null,
    loading: false,
  },
  reducers: {
    getUserPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserPostsSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    //   console.log(state.posts);
    },
    getUserPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getUserPostsStart,
  getUserPostsSuccess,
  getUserPostsFailure,
} = postUserSlice.actions;

export const getUserPosts = (userId) => async (dispatch) => {
  dispatch(getUserPostsStart());
  try {
    console.log(userId);
    const response = await axios.get( API_URL + `search/getPostAcc.php?userId=${userId}`);
    dispatch(getUserPostsSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    dispatch(getUserPostsFailure(error.message));
  }
};

export default postUserSlice.reducer;
