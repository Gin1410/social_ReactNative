import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const chatUserSlice = createSlice({
    name: 'chatUser',
    initialState: {
        chatUsers: [],
        error: null,
        loading: false,
    },
    reducers: {
        getChatUserStart(state) {
            state.loading = true;
            state.error = null;
        },
        getChatUserSuccess(state, action) {
            state.loading = false;
            state.chatUsers = action.payload;
            // console.log(state.chatUsers);
            // console.log(state.posts);
        },
        getChatUserFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const {
    getChatUserStart, getChatUserSuccess, getChatUserFailure,
} = chatUserSlice.actions;


export const getChatUser = () => async (dispatch, getState) => {
    dispatch(getChatUserStart());
    try {
        const token = getState().auth.token; 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(API_URL + 'chat/getChatUser.php', config);
        // console.log(response.data);
        dispatch(getChatUserSuccess(response.data));
    } catch (error) {   
        dispatch(getChatUserFailure(error.message));
    }
};

export default chatUserSlice.reducer;