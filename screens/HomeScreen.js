import { ScrollView, BackHandler, Alert} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { POSTS } from '../data/posts';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts } from '../store/home/getPostSlice';

import Header from '../components/Home/Header';
import Post from '../components/Home/Post';

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectPosts);
  // // console.log(posts);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);

  // return (
  //   <SafeAreaView>
  //     {Object.keys(posts).map((postId) => {
  //       const post = posts[postId];
  //       return (
  //         <SafeAreaView key={postId}>
  //           <Text>{post.caption}</Text>
  //           <Text>{post.image}</Text>
  //           {/* Hiển thị các thông tin khác về bài viết */}
  //         </SafeAreaView>
  //       );
  //     })}
  //   </SafeAreaView>
  // )};


  //back System
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit the application', 'Are you sure you want to exit the application?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Exit the app', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: `#D6E0F5` }}>
      <Header />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen