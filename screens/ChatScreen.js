import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getChatUser } from '../store/chat/chatUserSlice';
import { LinearGradient } from 'expo-linear-gradient';
import UserMes from '../components/chat/UserMes';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const chatUsers = useSelector((state) => state.chatUser.chatUsers);
  const scrollViewRef = useRef();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Refresh your data here, e.g., dispatch an action to get new posts
    dispatch(getPosts())
      .then(() => setRefreshing(false))
      .catch(() => setRefreshing(false));
  };

  useEffect(() => {
    dispatch(getChatUser());
  }, [dispatch]);

  return (
    <LinearGradient
      colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={{ padding: 10 }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}> My Message </Text>
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={{ marginBottom: 50 }}
          // onScroll={handleScroll}
          scrollEventThrottle={400}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {Object.values(chatUsers).map((chatUser, index) => (
            <UserMes key={chatUser.id} chatUser={chatUser} />
          ))}
        </ScrollView>
      </SafeAreaView>

    </LinearGradient>
  );
};

export default ChatScreen;
