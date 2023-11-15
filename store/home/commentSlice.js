import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

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
    },
});

export const { getCmtsStart, getCmtsSuccess, getCmtsFailure } = commentSlice.actions;

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

export default commentSlice.reducer;