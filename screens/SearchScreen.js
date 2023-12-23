import { ScrollView, BackHandler, Alert, View, TextInput, ActivityIndicator, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearchUser, searchUser } from '../store/search/searchUserSlice';
import { useNavigation } from '@react-navigation/native';
import Account from '../components/search/Account';

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.searchUser.searchResult);
  const loading = useSelector((state) => state.searchUser.loading);
  const error = useSelector((state) => state.searchUser.error);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm !== '') {
      dispatch(searchUser(trimmedSearchTerm));
    }
  }, [dispatch, searchTerm]);

  return (
    <LinearGradient
      colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 25,
            marginTop: 20,
            marginBottom: 20,
            width: 330,
            backgroundColor: '#635A8F',
            padding: 10,
            borderRadius: 30,
          }}
        >
          <Ionicons name="search" size={24} color="white" marginRight={10} marginLeft={5} />
          <TextInput
            type="text"
            placeholder="Search"
            placeholderTextColor={'white'}
            width="300"
            value={searchTerm}
            onClear={() => {
              setSearchTerm('');
              dispatch(resetSearchUser());
            }}
            onChangeText={(text) => {
              setSearchTerm(text);
              handleSearch(text);
            }}
          />
          <View style={{ position: 'absolute', right: 15, top: 10 }}>
            <Feather name="mic" size={24} color="white" />
          </View>
        </View>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {error && <Text>Error: {error}</Text>}

        {searchTerm.length > 0 && (
          <ScrollView
            style={{ marginBottom: 60 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {searchResult.map((followUser, index) => (
              <Account key={followUser.id} followUser={followUser}/>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SearchScreen;


