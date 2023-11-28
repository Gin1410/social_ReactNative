import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getUser } from '../../store/person/getUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Foundation } from '@expo/vector-icons';

import Post from '../Home/Post';
import { getUserPosts } from '../../store/search/postUserSlice';

const Infdetail = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.getUser.user);
  // console.log(useSelector(state => state.getUser.user));

  const userId = user.id;
  const { posts } = useSelector((state) => state.postUser);


  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserPosts(userId));
  }, [dispatch, userId]);

  return (
    <View>
      <View style={{ backgroundColor: 'rgba(94, 80, 149, 0.4)', marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 500, padding: 10, }}>My Self</Text>
      </View>

      <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
        <Foundation name="mail" size={24} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Email</Text>
          <Text>{user.email}</Text>
        </View>
      </View>

      <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
        <FontAwesome name="birthday-cake" size={24} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Birthday</Text>
          <Text>{user.birth}</Text>
        </View>
      </View>

      <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
        <Ionicons name="transgender-sharp" size={24} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Gender</Text>
          {user.gender == 0 ? (
            <Text>Male</Text>
          ) : user.gender == 1 ? (
            <Text>Female</Text>
          ) : (
            <Text>Secret</Text>
          )}
        </View>
      </View>

      <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
        <FontAwesome name="address-card" size={24} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Adress</Text>
          <Text>{user.address}</Text>
        </View>
      </View>

      <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
        <FontAwesome name="sticky-note" size={24} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Note</Text>
          <Text>{user.note}</Text>
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