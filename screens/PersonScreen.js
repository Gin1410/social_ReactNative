import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logout, checkToken } from '../store/authSlice';

const PersonScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const isToken = useSelector(checkToken);

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
    <View>
      <Text>PersonScreen</Text>
      <TouchableOpacity
        onPress={() => { handleLogout() }}
        // onPress={() => navigation.navigate('BottomNavigate')}
        style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 40, elevation: 3, backgroundColor: 'black' }}
      >
        <Text style={{ color: 'white' }}>Log Out </Text>
      </TouchableOpacity>
    </View>
  )
}

export default PersonScreen

const styles = StyleSheet.create({})