import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native'
import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import PersonScreen from '../screens/PersonScreen'
import AddPostScreen from '../screens/AddPostScreen';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();

const BottomNavigate = () => {

  //Out app
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit the application',
        'Are you sure you want to exit the application?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'Exit the app', onPress: () => BackHandler.exitApp() },
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);


  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#191970',
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
          headerShown: true,
          headerStyle: { backgroundColor: '#5d44d9' },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="AddPostScreen" component={AddPostScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#5d44d9' },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} style={{ top: 8 }} />
          ),
        }}
        name="ChatScreen" component={ChatScreen} />

      <Tab.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#5d44d9' },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
          headerTitleAlign: 'center',
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