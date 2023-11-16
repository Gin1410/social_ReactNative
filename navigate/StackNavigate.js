
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
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        tabBarActiveTintColor: '#191970',
        tabBarStyle: { backgroundColor: '#E7E7E7' },
      }}
    >

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
          headerStyle: {
            backgroundColor: '#5d44d9', // Set the desired background color
          },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
          headerTintColor: 'white',
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