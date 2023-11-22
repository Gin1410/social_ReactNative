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
        addPostStart(state) {
            state.loading = true;
            state.error = null;
        },
        addPostSuccess(state, action) {
            state.loading = false;
            // Update the posts array by adding the new post
            state.posts = [...state.posts, action.payload.newPost];
        },
        addPostFailure(state, action) {
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
    addPostStart, addPostSuccess, addPostFailure,
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

export const addPost = (image, caption) => async (dispatch, getState) => {
    dispatch(addPostStart());
    try {
      const token = getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
  
      const formData = new FormData();
      formData.append('image', {
        uri: image,
        type: 'image/jpeg', // Adjust the type according to your needs
        name: 'image.jpg',
      });
      formData.append('caption', caption);
    //   console.log(formData);
  
      const response = await axios.post(API_URL + 'home/addPost.php', formData, config);
    //   console.log(response);
  
      if (response.status === 201) {
        dispatch(addPostSuccess({ newPost: response.data }));
        dispatch(getPosts);
      } else {
        dispatch(addPostFailure('Failed to add post.'));
      }
    } catch (error) {
      dispatch(addPostFailure(error.message));
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
        // console.log('ok');
        const response = await axios.delete(API_URL + `home/deletePost.php?postId=${postId}`, config); // Adjust the API endpoint accordingly
        // console.log(response);
        
        dispatch(deletePostSuccess({ postId }));
        dispatch(getPosts());
    } catch (error) {
        dispatch(deletePostFailure(error.message));
    }

};

export default postSlice.reducer;