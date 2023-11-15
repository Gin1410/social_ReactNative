import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getPosts } from './postSlice'; // Import the getPosts action

const addLikeSlice = createSlice({
  name: 'addLike',
  initialState: {
    loading: false,
    error: null,
    likedPosts: [], // Track liked posts using an array
  },
  reducers: {
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
  addLikeStart,
  addLikeSuccess,
  addLikeFailure,
} = addLikeSlice.actions;

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

export default addLikeSlice.reducer;