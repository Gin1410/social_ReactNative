import {ScrollView, BackHandler, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { USERS } from '../data/users';

import Search from '../components/Search';
import Account from '../components/Search/Account';


const SearchScreen = () => {

  //back system
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
    <SafeAreaView style={{ backgroundColor: `#D6E0F5` }}>

      <Search />


      {/* list account */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {USERS.map((post, index) => (
          <Account key={index} post={post} />
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

export default SearchScreen

