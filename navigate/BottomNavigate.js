import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import PersonScreen from '../screens/PersonScreen'
import AddPostScreen from '../screens/AddPostScreen';
import MusicScreen from '../screens/MusicScreen';


const Tab = createBottomTabNavigator();

const BottomNavigate = () => {

  
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="HomeScreen" component={HomeScreen}
        // initialParams={{ token: token }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-search" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="SearchScreen" component={SearchScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="AddPostScreen" component={AddPostScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="MusicScreen" component={MusicScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="PersonScreen" component={PersonScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigate

const styles = StyleSheet.create({})