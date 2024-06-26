import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PostHeader from './PostHeader';

import { Provider, TextInput } from 'react-native-paper';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

import { useDispatch, useSelector } from 'react-redux';
import { getCmts } from '../../store/home/commentSlice';
import { getLikes } from '../../store/home/likeSlice';
import { addCmt } from '../../store/home/commentSlice';

import Cmt from './Cmt';
import Like from './Like';

import { LinearGradient } from 'expo-linear-gradient';

const PostDetail = ({ route }) => {
    const { postId, post } = route.params;
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.comment.cmts);
    // console.log(useSelector((state) => state.comment.cmts));

    const likes = useSelector((state) => state.like.likes);
    // console.log(likes);

    useEffect(() => {
        dispatch(getCmts(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        dispatch(getLikes(postId));
    }, [dispatch, postId]);

    const [showLikes, setShowLikes] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const handleLikePress = () => {
        setShowLikes(!showLikes);
        setShowComments(false);
    };

    const handleCommentPress = () => {
        setShowComments(!showComments);
        setShowLikes(false);
    };

    const [newComment, setNewComment] = useState('');


    return (
        <Provider>
            <LinearGradient
                colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
                style={{ flex: 1 }}
            >
                <ScrollView
                    style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, height: "fix-content" }}>
                    <PostHeader post={post} />

                    <PostContent post={post} />

                    {/* <PostFooter post={post} /> */}

                    <View style={{ marginLeft: 10, marginBottom: 30, top: 20 }}>
                        <TouchableOpacity onPress={handleLikePress}>
                            <Text style={{ color: "white" }}>View{post.like_count > 1 ? ' all' : ''} {post.like_count} {post.like_count > 1 ? 'likes' : 'like'}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={handleCommentPress}>
                            {/* <Text style={{ color: "gray" }}>View{post.comment_count > 1 ? ' all' : ''} {post.comment_count} {post.comment_count > 1 ? 'comments' : 'comment'}</Text> */}
                            <Text style={{ color: "white" }}>View Comment</Text>
                        </TouchableOpacity>

                    </View>

                    {/* comment */}
                    <View style={{ marginBottom: 20 }}>
                        <View >
                            {showComments && Object.values(comments).map((cmt, index) => (
                                <Cmt key={cmt.id} cmt={cmt} />
                            ))}
                        </View>
                    </View>

                    {/* like */}
                    <View style={{ marginBottom: 20, top: -20 }}>
                        <View >
                            {showLikes && Object.values(likes).map((like, index) => (
                                <Like key={like.id} like={like} />
                            ))}
                        </View>
                    </View>
                </ScrollView>

                <View style={{ backgroundColor: `#ffffff`, flexDirection: `row` }}>
                    <TextInput
                        placeholder="Comment"
                        style={{ paddingLeft: 10, width: `90%`, backgroundColor: `#ffffff` }}
                        onChangeText={(text) => setNewComment(text)}
                        value={newComment}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            if (newComment.trim() !== '') {
                                dispatch(addCmt(postId, newComment));
                                setNewComment(''); // Clear the input after sending the comment
                                ToastAndroid.show('Comment Success', ToastAndroid.SHORT);
                            }
                        }}>
                        <Feather
                            style={{ top: 20 }}
                            name="send" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </Provider>
    );
};

export default PostDetail;