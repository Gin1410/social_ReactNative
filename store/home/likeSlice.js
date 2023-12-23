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
      state.likes = [...state.likes, action.payload.newLike];
    },
    addLikeFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    deleteLikeStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteLikeSuccess(state, action) {
      state.loading = false;
    },
    deleteLikeFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getLikesStart,
  getLikesSuccess,
  getLikesFailure,
  addLikeStart,
  addLikeSuccess,
  addLikeFailure,
  deleteLikeStart,
  deleteLikeSuccess,
  deleteLikeFailure,
} = likeSlice.actions;

// export const getLikes = (postId) => async (dispatch, getState) => {
//   dispatch(getLikesStart());

//   try {
//     const response = await axios.get(API_URL + `home/getLike.php?postId=${postId}`);
//     dispatch(getLikesSuccess(response.data));
//   } catch (error) {
//     dispatch(getLikesFailure(error.message));
//   }
// };

export const addLike = (postId) => async (dispatch, getState) => {
  dispatch(addLikeStart());
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/home/addLike.php?postId=${postId}`, {}, config);
    // console.log(response.status)
    if (response.status === 200) {
      dispatch(addLikeSuccess(postId));
      dispatch(getPosts())
    } else {
      dispatch(addLikeFailure('Failed to add like.'));
    }
  } catch (error) {
    dispatch(addLikeFailure(error.message));
  }
};

export const deleteLike = (postId) => async (dispatch, getState) => {
  dispatch(deleteLikeStart());
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_URL}/home/deleteLike.php?postId=${postId}`, config);

    if (response.status === 200) {
      dispatch(deleteLikeSuccess(postId));
    }else if (response.status === 400) {
      dispatch(deleteLikeSuccess(postId));
      dispatch(getPosts())
    } else {
      dispatch(deleteLikeFailure('Failed to delete like.'));
    }
    
    dispatch(getPosts());
  } catch (error) {
    dispatch(deleteLikeFailure(error.message));
  }
};

export default likeSlice.reducer;
