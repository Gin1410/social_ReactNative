
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import BottomNavigate from './BottomNavigate';

const Stack = createNativeStackNavigator();

function StackNavigate() {

  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        
        <Stack.Screen 
          name="BottomNavigate" 
          component={BottomNavigate} 
          options={{headerShown: false}} 
        />

        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
  );
}

export default StackNavigate;