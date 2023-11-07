import { StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

import { USERS } from '../data/users';

const SearchScreen = () => {

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
    <SafeAreaView>

      {/* header */}
      <View style={{ justifyContent: 'center', alignItems:'center'}}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 7, textAlign: 'center', width: 300 }}>Search</Text>
      </View>

      {/* search */}
      <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, marginBottom: 20, width: 330, backgroundColor: '#FFFFFF', padding: 10, borderRadius: 30, elevation: 12, }}>
          <Ionicons name="search" size={24} color="black" marginRight={10} marginLeft={5} />          
          <TextInput type="text" placeholder="Search" />
        </View>

      {/* list account */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {USERS.map((post, index) => (
          <Account key={index} post={post} />
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

export default SearchScreen

const Account = ({ post }) => {

  const onFollow = () => {
      console.log("Followed")
  }

  const onUnfollow = () => {
      console.log("Unfollowed")
  }


  return (
      <View style={{ flexDirection: "row", margin: 10, height: 50, alignItems: "center", marginLeft: 30, alignSelf: 'flex-start', width: 320 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
              <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{position: 'absolute', right: 0}}>
              {post.status === "Follow" ? (
                  <TouchableOpacity onPress={onFollow} style={styles.followButton}>
                      <Text style={styles.buttonText}>{post.status}</Text>
                  </TouchableOpacity>
              ) : (
                  <TouchableOpacity onPress={onUnfollow} style={styles.unfollowButton}>
                      <Text style={styles.buttonText}>{post.status}</Text>
                  </TouchableOpacity>
              )}

          </View>
      </View >
  )
};

const styles = StyleSheet.create({
  followButton: {
      backgroundColor: "#4169E1",
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
      backgroundColor: "#555555",
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
      color: "white",
      fontWeight: "bold"
  }
  
})