import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getPosts } from './getPostsSlice'; // Import the getPosts action

const addLikeSlice = createSlice({
  name: 'addLike',
  initialState: {
    loading: false,
    error: null,
    liked: true,
  },
  reducers: {
    addLikeStart(state) {
      state.loading = true;
      state.error = null;
    },
    addLikeSuccess(state, action) {
      state.loading = false;
      state.liked = action.payload.liked;
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

export const addLike = (postId) => async (dispatch, getState) => {
  dispatch(addLikeStart());
  try {
    const token = getState().auth.token; // Accessing the token from the auth state
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/home/deleteLike.php?postId=${postId}`, {}, config);

    // Determine if the post is liked based on the response data
    const liked = response.data.liked || true;

    dispatch(addLikeSuccess({ liked }));
    dispatch(getPosts()); // Dispatch the getPosts action to load the updated posts
  } catch (error) {
    dispatch(addLikeFailure(error.message));
  }
};

export default addLikeSlice.reducer;