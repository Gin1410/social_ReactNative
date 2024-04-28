import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const getUserSlice = createSlice({
    name: 'getUser',
    initialState: {
        user: [],
        error: null,
        loading: false,
    },
    reducers: {
        getUserStart(state) {
            state.loading = true;
            state.error = null;
        },
        getUserSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
            // console.log(action.payload);
        },
        getUserFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { getUserStart, getUserSuccess, getUserFailure } = getUserSlice.actions;

export const getUser = () => async (dispatch, getState) => {
    dispatch(getUserStart());
    try {
        const token = getState().auth.token; // Accessing the token from the auth state
        // console.log(token);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(API_URL + 'person/getUser.php', config);
        // console.log(response.data);
        dispatch(getUserSuccess(response.data));
    } catch (error) {   
        dispatch(getUserFailure(error.message));
    }
};

export default getUserSlice.reducer;