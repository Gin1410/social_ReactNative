import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../data/config';
import { getChatUser } from './chatUserSlice';

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
        addMsgStart(state) {
            state.loading = true;
            state.error = null;
        },
        addMsgSuccess(state, action) {
            state.loading = false;
            // Update the posts array by adding the new post
            state.msgs = [...state.msgs, action.payload.newMsg];
        },
        addMsgFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export const {
    getChatMsgStart, getChatMsgSuccess, getChatMsgFailure,
    addMsgStart, addMsgSuccess, addMsgFailure,
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



export const addChatMsg = (chatUserId, message) => async (dispatch, getState) => {
    // console.log('ok');
    dispatch(addMsgStart());
    try {
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        const formData = new FormData();
        formData.append('message', message);
        //   console.log(formData);

        const response = await axios.post(API_URL + `chat/addMsg.php?chatUserId=${chatUserId}`, formData, config);
        //   console.log(response);

        if (response.status === 200) {
            // dispatch(addMsgSuccess({ newMsg: response.data }));
            dispatch(getChatUser());
        } else {
            dispatch(addMsgFailure('Failed to add post.'));
        }
    } catch (error) {
        dispatch(addMsgFailure(error.message));
    }
};



export default chatMsgSlice.reducer;