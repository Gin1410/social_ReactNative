import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';

const chatMsgSlice = createSlice({
    name: 'chatMsg',
    initialState: {
        msgs: [],
        error: null,
        loading: false,
    },
    reducers: {
        getChatMsgStart(state) {
            state.loading = true;
            state.error = null;
        },
        getChatMsgSuccess(state, action) {
            state.loading = false;
            state.msgs = action.payload;
            // console.log(state.chatUsers);
            // console.log(state.posts);
        },
        getChatMsgFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const {
    getChatMsgStart, getChatMsgSuccess, getChatMsgFailure,
} = chatMsgSlice.actions;


export const getChatMsg = (chatUserId) => async (dispatch, getState) => {
    dispatch(getChatMsgStart());
    try {
        const token = getState().auth.token; 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(API_URL + `chat/getMsg.php?chatUserId=${chatUserId}`, config);
        // console.log(response.data);
        dispatch(getChatMsgSuccess(response.data));
    } catch (error) {   
        dispatch(getChatMsgFailure(error.message));
    }
};

export default chatMsgSlice.reducer;