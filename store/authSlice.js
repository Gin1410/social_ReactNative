import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../data/config';
import { useSelector } from 'react-redux';

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
    } catch (error) {
        dispatch(loginFailure(error.message));
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

// export const logout = () => async (dispatch, getState) => {
//     dispatch(logoutUser());
//     console.log('Logout auth');
// };

export const checkToken = (state) => state.auth.token;

export default authSlice.reducer;