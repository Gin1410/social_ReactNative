import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const searchUserSlice = createSlice({
  name: 'searchUser',
  initialState: {
    users: [],
    searchResult: [],
    error: null,
    loading: false,
  },
  reducers: {
    searchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchUserSuccess(state, action) {
      state.loading = false;
      state.searchResult = action.payload;
    },
    searchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    resetSearchUser(state) {
      state.users = [];
      state.searchResult = [];
      state.error = null;
      state.loading = false;
    },
  },
});

export const { 
  searchUserStart, searchUserSuccess, searchUserFailure,
  resetSearchUser,
 } = searchUserSlice.actions;

export const searchUser = (searchTerm) => async (dispatch, getState) => {
  dispatch(searchUserStart());
  try {
    const token = getState().auth.token; // Accessing the token from the auth state
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get( API_URL + `search/searchUser.php?search=${searchTerm}`, config);
    // console.log(response.data);
    dispatch(searchUserSuccess(response.data));
    
  } catch (error) {
    dispatch(searchUserFailure(error.message));
  }
};

export default searchUserSlice.reducer;
