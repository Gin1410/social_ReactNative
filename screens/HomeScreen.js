import { ScrollView, BackHandler, Alert, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/home/postSlice';

import Header from '../components/Home/Header';
import Post from '../components/Home/Post';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);

  const scrollViewRef = useRef();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;

    // Adjust the threshold based on your needs
    const endThreshold = 100;

    if (contentHeight - offsetY < layoutHeight + endThreshold) {
      // Load more posts when approaching the end of the scroll
      if (!loading) {
        dispatch(getPosts());
      }
    }
  };

  return (
    <LinearGradient
      colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Header />
        <ScrollView
          ref={scrollViewRef}
          style={{ marginBottom: 50 }}
          onScroll={handleScroll}
          scrollEventThrottle={400} // Adjust the throttle based on your needs
        >
          {Object.values(posts).map((post, index) => (
            <Post key={post.id} post={post} />
          ))}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
