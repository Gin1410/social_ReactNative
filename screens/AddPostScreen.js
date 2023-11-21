import { StyleSheet, BackHandler, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import AddPost from '../components/AddPost/AddPost';

import { LinearGradient } from 'expo-linear-gradient';

const AddPostScreen = ({ navigation }) => {

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

    <LinearGradient
      colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <AddPost navigation={navigation}/>
      </SafeAreaView>

    </LinearGradient>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({})