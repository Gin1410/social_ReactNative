import { Text, View, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import { Provider } from 'react-native-paper';

import PostHeader from '../Home/PostHeader';
import PostContent from '../Home/PostContent';
import PostFooter from '../Home/PostFooter';


const Post = ({ post }) => {

    return (
        <Provider>
            <View
                style={{ margin: 10, marginLeft: 15, marginRight: 15, backgroundColor: `#ffffff`, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, height: "fix-content", borderRadius: 10 }}>

                <PostHeader post={post} />

                <PostContent post={post} />

                <PostFooter post={post} />

            </View>

        </Provider>
    )
}


export default Post