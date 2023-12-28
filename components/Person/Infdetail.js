import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getUser } from '../../store/person/getUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Post from '../Home/Post';
import { getUserPosts } from '../../store/search/postUserSlice';

import { useNavigation } from '@react-navigation/native';

const Infdetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.getUser.user);
  // console.log(useSelector(state => state.getUser.user));

  const userId = user.id;
  const { posts } = useSelector((state) => state.postUser);


  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserPosts(userId));
  }, [dispatch, userId]);

  if (userId.birth != null) {
    const splitDateTime = user.birth.split(' ');
    const dateComponents = splitDateTime[0].split('-');
    const formattedDate = `${dateComponents[2]}/${dateComponents[1]}`;
  }

  return (
    <View>
      <View style={{ backgroundColor: 'rgba(94, 80, 149, 0.4)', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: 500, padding: 10, }}>My Self</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateInfor', { userId: user.id})}
          style={{height: 50, width:50, right: 10, justifyContent: 'center', alignItems: 'center'}}
        >
          <Feather name="edit-3" size={24} color="black" style={{ }} />
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 10, marginRight: 10 }}>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <Zocial name="email" size={24} color="black" style={{ width: '10%', }} />
          <View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Email</Text>
            <Text>{user.email}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <FontAwesome name="birthday-cake" size={24} color="black" style={{ width: '10%', }} />
          <View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Birthday</Text>
            <Text>{userId.birth != null ? formattedDate : 'null'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <FontAwesome5 name="transgender" size={27} color="black" style={{ width: '10%', }} />
          <View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Gender</Text>
            <View>
              {user.gender == 0 ? (
                <Text>Male</Text>
              ) : user.gender == 1 ? (
                <Text>Female</Text>
              ) : (
                <Text>Secret</Text>
              )}
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <FontAwesome name="address-card" size={22} color="black" style={{ width: '10%', }} />
          <View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Adress</Text>
            <Text>{user.address ? user.address : 'null'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <FontAwesome name="sticky-note" size={24} color="black" style={{ width: '10%', }} />
          <View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Note</Text>
            <Text>{user.note ? user.note : 'null'}</Text>
          </View>
        </View>

      </View>

      <View style={{ backgroundColor: 'rgba(94, 80, 149, 0.4)', marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 500, padding: 10, }}>My Posts</Text>
      </View>

      {Object.values(posts).map((post, index) => (
        <Post key={post.id} post={post} />
      ))}

    </View>
  )
}

export default Infdetail

const styles = StyleSheet.create({})