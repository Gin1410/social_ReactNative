import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getPosts } from '../home/postSlice';
import { searchUser } from './searchUserSlice';
import getUserSlice from '../person/getUserSlice';

const followSlice = createSlice({
  name: 'follow',
  initialState: {
    follows: [],
    error: null,
    loading: false,
  },
  reducers: {
    getfollowsStart(state) {
      state.loading = true;
      state.error = null;
      state.follows = [];
    },
    getfollowsSuccess(state, action) {
      state.loading = false;
      state.follows = action.payload;
      // console.log(state.cmts);
    },
    getfollowsFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    addfollowStart(state) {
      state.loading = true;
      state.error = null;
    },
    addfollowSuccess(state, action) {
      state.loading = false;
      state.follows = [...state.follows, action.payload.newfollow];
    },
    addfollowFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    deletefollowStart(state) {
      state.loading = true;
      state.error = null;
    },
    deletefollowSuccess(state, action) {
      state.loading = false;
    },
    deletefollowFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getfollowsStart,
  getfollowsSuccess,
  getfollowsFailure,
  addfollowStart,
  addfollowSuccess,
  addfollowFailure,
  deletefollowStart,
  deletefollowSuccess,
  deletefollowFailure,
} = followSlice.actions;

// export const getfollows = (postId) => async (dispatch, getState) => {
//   dispatch(getfollowsStart());

//   try {
//     const response = await axios.get(API_URL + `home/getfollow.php?postId=${postId}`);
//     dispatch(getfollowsSuccess(response.data));
//   } catch (error) {
//     dispatch(getfollowsFailure(error.message));
//   }
// };

export const addfollow = (followId) => async (dispatch, getState) => {
  dispatch(addfollowStart());
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/search/addFollow.php?followId=${followId}`,{} , config);
    // console.log(response.status)
    if (response.status === 200) {
      dispatch(addfollowSuccess(followId));
      dispatch(getUserSlice());
    } else {
      dispatch(addfollowFailure('Failed to add follow.'));
    }
  } catch (error) {
    dispatch(addfollowFailure(error.message));
  }
};

export const deletefollow = (followId) => async (dispatch, getState) => {
  dispatch(deletefollowStart());
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_URL}/search/deleteFollow.php?followId=${followId}`, config);

    if (response.status === 200) {
      dispatch(deletefollowSuccess(followId));
      dispatch(getUserSlice());
    }else if (response.status === 400) {
      dispatch(deletefollowSuccess(followId));
      dispatch(getPosts())
    } else {
      dispatch(deletefollowFailure('Failed to delete follow.'));
    }
    
    dispatch(getPosts());
  } catch (error) {
    dispatch(deletefollowFailure(error.message));
  }
};

export default followSlice.reducer;
