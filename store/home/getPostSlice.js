import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

import { checkToken } from '../authSlice';


const getPostSlice = createSlice({
    name: 'getPost',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {
        getPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        getPostsSuccess(state, action) {
            state.loading = false;
            state.posts = action.payload;
        },
        getPostsFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } = getPostSlice.actions;

export const getPosts = () => async (dispatch, getState) => {
    dispatch(getPostsStart());

    try {
        const token = checkToken(getState()); // Lấy token từ trạng thái auth
        console.log(token);
        const response = await axios.get(API_URL + 'home/getPost.php', {
            headers: {
                Authorization: `Bearer ${token}`, // Truyền token vào tiêu đề yêu cầu
            },
        });
        console.log(response.data);
        dispatch(getPostsSuccess(response.data));
    } catch (error) {
        dispatch(getPostsFailure({ error: error.message }));
    }
};

export const selectPosts = (state) => state.getPost.posts;

export default getPostSlice.reducer;