
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import BottomNavigate from './BottomNavigate';
import PostDetail from '../screens/PostDetail';
import Post from '../components/Home/Post';

const Stack = createNativeStackNavigator();

function StackNavigate() {

  return (
    <Stack.Navigator initialRouteName="LoginScreen">

      <Stack.Screen
        name="BottomNavigate"
        component={BottomNavigate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          headerShown: true,
          tabBarLabel: 'Post Detail',
        }}
      />

      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default StackNavigate;