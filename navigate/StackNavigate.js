
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import BottomNavigate from './BottomNavigate';
import PostDetail from '../components/Home/PostDetail';
import Post from '../components/Home/Post';
import AddPostScreen from '../screens/AddPostScreen';
// import Account from '../components/Search/Account';
import SearchScreen from '../screens/SearchScreen';
import AccountDetail from '../components/search/AccountDetail';

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

      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Account"
        component={Account}
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
      /> */}

      <Stack.Screen
        name="AccountDetail"
        component={AccountDetail}
        options={{
          headerShown: true,
          tabBarLabel: 'Account Detail',
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
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default StackNavigate;