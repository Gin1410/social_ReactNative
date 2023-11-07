import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigate from './navigate/StackNavigate';

import { Provider } from 'react-redux';
import store from './store/store';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigate />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})