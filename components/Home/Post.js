import { Text, View, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import { Provider } from 'react-native-paper';

import PostHeader from '../Home/PostHeader';
import PostContent from '../Home/PostContent';
import PostFooter from '../Home/PostFooter';

import { useNavigation } from '@react-navigation/native';

const Post = ({ post }) => {
    const navigation = useNavigation();
    return (
        <Provider>
            <TouchableOpacity
                onPress={() => navigation.navigate('PostDetail', { postId: post.id, post: post})}
            >
                <View
                    style={{ margin: 10, marginLeft: 15, marginRight: 15, backgroundColor: `#ffffff`, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, height: "fix-content", borderRadius: 10, elevation: 12 }}>

                    <PostHeader post={post} />

                    <PostContent post={post} />

                    <PostFooter post={post} />

                </View>
            </TouchableOpacity>
        </Provider>
    )
}


export default Post