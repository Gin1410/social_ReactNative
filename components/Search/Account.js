import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {addfollow, deletefollow} from '../../store/search/followSlice'
// import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

const Account = ({ followUser }) => {
  const navigation = useNavigation();

  return (
    <View>
       <TouchableOpacity
                onPress={() => navigation.navigate('AccountDetail', { followId: followUser.id, followUser: followUser })}
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
                      {followUser.follow == 0 ? (
                        <View style={styles.followButton}>
                          <Text style={styles.buttonText}>Follow</Text>
                        </View>
                      ) : (
                        <View style={styles.unfollowButton}>
                          <Text style={styles.buttonText}>UnFollow</Text>
                        </View>
                      )}
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
