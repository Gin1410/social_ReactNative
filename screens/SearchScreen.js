import { ScrollView, BackHandler, Alert, View, TextInput, ActivityIndicator, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearchUser, searchUser } from '../store/search/searchUserSlice';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.searchUser.searchResult);
  const loading = useSelector((state) => state.searchUser.loading);
  const error = useSelector((state) => state.searchUser.error);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm !== '') {
      dispatch(searchUser(trimmedSearchTerm));
    } else {
      dispatch(resetSearchUser());
    }
  }, [dispatch, searchTerm]);

  // back system
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit the application',
        'Are you sure you want to exit the application?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'Exit the app', onPress: () => BackHandler.exitApp() },
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
            onChangeText={(text) => setSearchTerm(text)}
            onSubmitEditing={handleSearch}
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
            {searchResult.map((user) => (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  height: 50,
                  alignItems: 'center',
                  marginLeft: 30,
                  alignSelf: 'flex-start',
                  width: 320,
                }}
                key={user.id}
              >
                <Image source={{ uri: user.avatar }} style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'medium', fontSize: 18, color: 'white' }}>{user.name}</Text>
                  <Text style={{ fontWeight: 'light', fontSize: 14, color: 'white' }}>{user.email}</Text>
                </View>
                <View style={{ position: 'absolute', right: 0 }}>
                  {user.follow == 1 ? (
                    <TouchableOpacity style={styles.followButton}>
                      <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.unfollowButton}>
                      <Text style={styles.buttonText}>Unfollow</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  followButton: {
    backgroundColor: '#6495ED',
    outline: 'none',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: 35,
    width: 80,
    opacity: 1,
    elevation: 10,
  },
  unfollowButton: {
    backgroundColor: '#555555',
    outline: 'none',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: 35,
    width: 80,
    opacity: 1,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchScreen;


