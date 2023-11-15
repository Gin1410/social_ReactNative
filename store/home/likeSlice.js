import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getPosts } from './postSlice';

const likeSlice = createSlice({
    name: 'like',
    initialState: {
        likes: [],
        error: null,
        loading: false,
        likedPosts: [], // Track liked posts using an array
    },
    reducers: {
        getLikesStart(state) {
            state.loading = true;
            state.error = null;
            state.likes = [];
        },
        getLikesSuccess(state, action) {
            state.loading = false;
            state.likes = action.payload;
            // console.log(state.cmts);
        },
        getLikesFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
        addLikeStart(state) {
            state.loading = true;
            state.error = null;
        },
        addLikeSuccess(state, action) {
            state.loading = false;
            state.likedPosts.push(action.payload.postId); // Add the postId to the likedPosts array
        },
        addLikeFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { 
    getLikesStart, getLikesSuccess, getLikesFailure,
    addLikeStart, addLikeSuccess, addLikeFailure,
} = likeSlice.actions;

export const getLikes = (postId) => async (dispatch, getState) => {
    dispatch(getLikesStart());

    try {
        const response = await axios.get(API_URL + `home/getLike.php?postId=${postId}`);
        // console.log(response.data);
        dispatch(getLikesSuccess(response.data));
    } catch (error) {
        dispatch(getLikesFailure(error.message));
    }
};

export const addLike = (postId, likedPosts) => async (dispatch, getState) => {
    dispatch(addLikeStart());
    try {
      const token = getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`${API_URL}/home/addLike.php?postId=${postId}`, {}, config);
  
      if (response.status === 201) {
        // Liked successfully
        dispatch(addLikeSuccess({ postId, likedPosts })); // Pass postId and likedPosts to the action
      } else if (response.status === 400) {
        // Like already exists, set liked to true
        dispatch(addLikeSuccess({ postId, likedPosts: true }));
      } else {
        // Handle other status codes if needed
        dispatch(addLikeFailure('Failed to add like.'));
      }
  
      dispatch(getPosts());
    } catch (error) {
      dispatch(addLikeFailure(error.message));
    }
  };

export default likeSlice.reducer;