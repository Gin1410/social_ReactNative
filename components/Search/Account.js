import { StyleSheet, Text, View, TouchableOpacity, Image,  ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addfollow, deletefollow } from '../../store/search/followSlice'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

const Account = ({ followUser }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [follow, setFollow] = useState();

  useEffect(() => {
    { followUser.follow == 1 ? setFollow(true) : setFollow(false) }
  }, []);

  const handleFollow = () => {
    if (follow == 1) {
      dispatch(deletefollow(followUser.id));
      // console.log("đã xóa follow")
      setFollow(follow);
      // console.log(followUser.id, follow, "follow");
      ToastAndroid.show('UnFollow success', ToastAndroid.SHORT);
    } else {
      // console.log("đã add follow")
      dispatch(addfollow(followUser.id));
      setFollow(!follow);
      // console.log(followUser.id, follow, "unfollow");
      ToastAndroid.show('Follow Success', ToastAndroid.SHORT);
    }
    setFollow(!follow);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountDetail', { followId: followUser.id, followUser: followUser, follow })}
      >
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
          key={followUser.id}
        >
          <Image source={{ uri: followUser.avatar }} style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18, color: 'white' }}>{followUser.name}</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14, color: 'white' }}>{followUser.email}</Text>
          </View>
          <View style={{ position: 'absolute', right: 0 }}>
            <TouchableOpacity
              onPress={handleFollow}>
              {follow == 0 ? (
                <View style={styles.followButton}>
                  <Text style={styles.buttonText}>Follow</Text>
                </View>
              ) : (
                <View style={styles.unfollowButton}>
                  <Text style={styles.buttonText}>UnFollow</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Account

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
