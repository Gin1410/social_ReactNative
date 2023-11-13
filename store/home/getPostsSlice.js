import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const getPostsSlice = createSlice({
    name: 'getPosts',
    initialState: {
        posts: [],
        error: null,
        loading: false,
    },
    reducers: {
        getPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        getPostsSuccess(state, action) {
            state.loading = false;
            state.posts = action.payload;
            // console.log(action.payload);
            // console.log(state.posts);
        },
        getPostsFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } = getPostsSlice.actions;

export const getPosts = () => async (dispatch, getState) => {
    dispatch(getPostsStart());
    try {
        const token = getState().auth.token; // Accessing the token from the auth state
        // console.log(token);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(API_URL + 'home/getAllPost.php', config);
        // console.log(response.data);
        dispatch(getPostsSuccess(response.data));
    } catch (error) {   
        dispatch(getPostsFailure(error.message));
    }
};

export default getPostsSlice.reducer;