import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        error: null,
        loading: false,
    },
    reducers: {
        getPostsStart(state) {
            state.loading = true;
            state.error = null;
            // state.posts = [];
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
        deletePostStart(state) {
            state.loading = true;
            state.error = null;
        },
        deletePostSuccess(state, action) {
            state.loading = false;
            // Update the posts array by filtering out the deleted post
            state.posts = state.posts.filter(post => post.id !== action.payload.postId);
        },
        deletePostFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
        resetPosts(state) {
            state.posts = [];
          },
    },
});

export const { 
    getPostsStart, getPostsSuccess, getPostsFailure,
    deletePostStart, deletePostSuccess, deletePostFailure,
    resetPosts,
 } = postSlice.actions;



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


export const deletePost = (postId) => async (dispatch, getState) => {
    dispatch(deletePostStart());
    try {
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        console.log('ok');
        const response = await axios.delete(API_URL + `home/deletePost.php?postId=${postId}`, config); // Adjust the API endpoint accordingly
        // console.log(response);
        
        dispatch(deletePostSuccess({ postId }));
        dispatch(getPosts());
    } catch (error) {
        dispatch(deletePostFailure(error.message));
    }

};

export default postSlice.reducer;