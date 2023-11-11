import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';
import { logout, checkToken } from '../store/authSlice';

import Infgeneral from '../components/Person/Infgeneral';
import Infdetail from '../components/Person/Infdetail';

const PersonScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const isToken = useSelector(checkToken);

  // const handleLogout = () => {
  //   const tokenExists = isToken;
  //   if (tokenExists) {
  //     dispatch(logout()).then(() => {
  //       console.log('Logout');
  //       navigation.navigate('LoginScreen');
  //     })

  //   }
  // };

  const handleLogout = () => {
    const tokenExists = isToken;
    if (tokenExists) {
      dispatch(logout()).then(() => {
        console.log('Logout');
        navigation.navigate('LoginScreen');
      })

    }
  };

  return (
    <SafeAreaView >

      <Infgeneral />

      <Infdetail />

      <View style={{ display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => { handleLogout() }}
          style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 40, elevation: 3, backgroundColor: 'black' }}
        >
          <Text style={{ color: 'white' }}>Log Out </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default PersonScreen

const styles = StyleSheet.create({})