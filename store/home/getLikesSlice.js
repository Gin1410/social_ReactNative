import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const getLikesSlice = createSlice({
    name: 'getLikes',
    initialState: {
        likes: [],
        error: null,
        loading: false,
    },
    reducers: {
        getLikesStart(state) {
            state.loading = true;
            state.error = null;
            state.likes = [];
        },
        getLikesSuccess(state, action) {
            state.loading = false;
            state.likes = action.payload;
            // console.log(state.cmts);
        },
        getLikesFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const { getLikesStart, getLikesSuccess, getLikesFailure } = getLikesSlice.actions;

export const getLikes = (postId) => async (dispatch, getState) => {
    dispatch(getLikesStart());
    
    try {
        // const config = {
        //     params: {
        //         postId: postId,
        //     },
        // };
        const response = await axios.get(API_URL + `home/getLike.php?postId=${postId}`);
        // console.log(response.data);
        dispatch(getLikesSuccess(response.data));
    } catch (error) {   
        dispatch(getLikesFailure(error.message));
    }
};

export default getLikesSlice.reducer;