import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getPosts } from './postSlice';

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        cmts: [],
        error: null,
        loading: false,
    },
    reducers: {
        getCmtsStart(state) {
            state.loading = true;
            state.error = null;
            state.cmts = [];
        },
        getCmtsSuccess(state, action) {
            state.loading = false;
            state.cmts = action.payload;
            // console.log(state.cmts);
        },
        getCmtsFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
        addCmtStart(state) {
            state.loading = true;
            state.error = null;
        },
        addCmtSuccess(state, action) {
            state.loading = false;
            // Update the comments array by adding the new comment
            state.cmts = [...state.cmts, action.payload.newComment];
        },
        addCmtFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { 
    getCmtsStart, getCmtsSuccess, getCmtsFailure,
    addCmtStart, addCmtSuccess, addCmtFailure,
 } = commentSlice.actions;

export const getCmts = (postId) => async (dispatch, getState) => {
    dispatch(getCmtsStart());
    
    try {
        const response = await axios.get(API_URL + `home/getCmt.php?postId=${postId}`);
        // console.log(response.data);
        dispatch(getCmtsSuccess(response.data));
    } catch (error) {   
        dispatch(getCmtsFailure(error.message));
    }
};


export const addCmt = (postId, content) => async (dispatch, getState) => {
    dispatch(addCmtStart());
    try {
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.post(API_URL + `home/addCmt.php?postId=${postId}`, { content }, config);
        // console.log(response.status);

        if (response.status === 200) {
            dispatch(addCmtSuccess({ newComment: response.data }));
            dispatch(getCmts(postId));
            dispatch(getPosts());
        } else {
            // Handle other status codes if needed
            dispatch(addCmtFailure('Failed to add comment.'));
        }
    } catch (error) {
        dispatch(addCmtFailure(error.message));
    }
};

export default commentSlice.reducer;