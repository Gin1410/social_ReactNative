import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigate from './navigate/StackNavigate';
import React, { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  const [data, setData] = useState('');

  return (
    // <Provider store={store}>
      <NavigationContainer>
        <StackNavigate />
      </NavigationContainer>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({})