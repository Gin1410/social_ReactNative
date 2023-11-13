import { ScrollView, BackHandler, Alert, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/home/getPostsSlice';

import Header from '../components/Home/Header';
import Post from '../components/Home/Post';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  //   return (
  //     <SafeAreaView>
  //       {/* {posts.map((post) => ( */}
  //       <SafeAreaView key={posts.id}>
  //         <Text>{posts.email}</Text>
  //         <Text>{posts.name}</Text>
  //         {/* Display other post information */}
  //       </SafeAreaView>
  //       {/* ))} */}
  //     </SafeAreaView>
  //   )
  // };


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
        {/* {Object.values(posts).map((post, index) => (
          <Post key={post.id} post={post} />
        ))
        } */}
         {Object.values(posts).map((post, index) => (
          <Post key={post.id} post={post} />
        ))
        }

      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen