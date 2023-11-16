import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../data/config';
import { useSelector } from 'react-redux';
import { resetPosts } from './home/postSlice';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        error: null,
        loading: false,
    },
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.token = action.payload.token;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
        logoutUser(state) {
            state.token = null;
            state.error = null;
            state.loading = false;
        },
        signupStart(state) {
            state.loading = true;
            state.error = null;
        },
        signupSuccess(state, action) {
            state.loading = false;
            state.token = action.payload.token;
        },
        signupFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { 
    loginStart, loginSuccess, loginFailure, 
    logoutUser, 
    signupStart, signupSuccess, signupFailure, 
} = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(API_URL + 'log_regis/login.php', {
      email,
      password,
    });

    dispatch(loginSuccess(response.data));
    console.log(response.data);
    console.log(response.data.token);

    // Return true to indicate a successful login
    return true;
  } catch (error) {
    dispatch(loginFailure(error.message));
    // Return false to indicate a failed login
    return false;
  }
};


export const signup = (name, email, password) => async (dispatch) => {
    dispatch(signupStart());
    try {
        const response = await axios.post(API_URL + 'log_regis/register.php', {
            name,
            email,
            password,
        });
        dispatch(signupSuccess(response.data));
    } catch (error) {
        dispatch(signupFailure(error.message));
    }
};

export const logout = () => async (dispatch, getState) => {
    dispatch(logoutUser());
    dispatch(resetPosts()); // Thêm dòng này để reset posts khi logout
    console.log('Logout auth');
};

export default authSlice.reducer;