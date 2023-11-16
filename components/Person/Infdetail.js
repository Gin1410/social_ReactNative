import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getUser } from '../../store/person/getUserSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Foundation } from '@expo/vector-icons';

const Infdetail = () => {
  const dispatch = useDispatch();
    const user = useSelector(state => state.getUser.user);
    // console.log(useSelector(state => state.getUser.user));
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
  return (
    <View>
        <View style={{ backgroundColor: 'rgba(94, 80, 149, 0.4)', marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 500, padding: 10, }}>My Self</Text>
        </View>
        <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
          <Foundation name="mail" size={24} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: 500}}>Email</Text>
            <Text>{user.email}</Text>
          </View>
        </View>
      </View>
  )
}

export default Infdetail

const styles = StyleSheet.create({})