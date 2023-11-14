import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import PostHeader from '../components/Home/PostHeader';

import { Provider } from 'react-native-paper';
import PostContent from '../components/Home/PostContent';
import PostFooter from '../components/Home/PostFooter';

import { useDispatch, useSelector } from 'react-redux';
import { getCmts } from '../store/home/getCmtsSlice';
import Cmt from '../components/Home/Cmt';


const PostDetail = ({ route }) => {
    const { postId, post } = route.params;
    const dispatch = useDispatch();
    const cmts = useSelector((state) => state.getCmts.cmts);
    console.log(cmts);

    useEffect(() => {
        dispatch(getCmts(postId));
    }, [dispatch, postId]);

    return (
        <Provider>
            <ScrollView
                style={{ backgroundColor: `#ffffff`, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, height: "fix-content", elevation: 12 }}>
                <PostHeader post={post} />

                <PostContent post={post} />

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, marginBottom: 10, marginRight: 10 }}>

                    <View style={{ flexDirection: "row", alignItem: "center", marginLeft: 10 }}>
                        <TouchableOpacity style={{ alignItems: "center", alignContent: "center" }}>
                            <AntDesign name="hearto" size={24} color="black" />
                            <Text style={{ color: "black" }}> {post.like_count} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
                            <Feather name="message-circle" size={24} color="black" />
                            <Text style={{ color: "black" }}> {post.comment_count} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
                            <Feather style={{ marginLeft: 7, marginTop: 1 }} name="send" size={24} color="black" />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity>
                        <Feather style={{ marginLeft: 10, marginTop: -15 }} name="bookmark" size={24} color="black" />
                    </TouchableOpacity>

                </View>

                {/* comment */}
                <View style={{ marginBottom: 20 }}>
                    <View >
                        {Object.values(cmts).map((cmt, index) => (
                            <Cmt key={cmt.id} cmt={cmt} />
                        ))
                        }
                    </View>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default PostDetail;