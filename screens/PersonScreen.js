import { StyleSheet, Text, View, TouchableOpacity, Alert,BackHandler } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

import Infgeneral from '../components/Person/Infgeneral';
import Infdetail from '../components/Person/Infdetail';

const PersonScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      console.log('Logout');
      navigation.navigate('LoginScreen');
    })
  };

  //back System
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
    <SafeAreaView >

      <Infgeneral />

      <Infdetail />

      <View style={{ display: 'flex', alignItems: 'center' }}>
        {isAuthenticated && (
          <TouchableOpacity
            onPress={() => { handleLogout() }}
            style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 40, elevation: 3, backgroundColor: 'black' }}
          >
            <Text style={{ color: 'white' }}>Log Out </Text>
          </TouchableOpacity>
        )}
      </View>

    </SafeAreaView>
  )
}

export default PersonScreen

const styles = StyleSheet.create({})