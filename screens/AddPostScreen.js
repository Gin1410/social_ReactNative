import { StyleSheet, Text, View, Image, TextInput, BackHandler, Alert  } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';

const AddPostScreen = () => {

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
        <SafeAreaView>

            {/* header */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 7, textAlign: 'center', width: 300 }}>Add New Post</Text>
            </View>

            {/* content */}
            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
                <Image
                    source={require('../assets/image/placeholderIMG.png')}
                    style={{ width: 150, height: 150 }}
                />
                <TextInput
                    placeholder="your caption"
                    style={{ paddingLeft: 10, width: 215, fontSize: 17 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default AddPostScreen

const styles = StyleSheet.create({})