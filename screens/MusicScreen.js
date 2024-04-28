import { ScrollView, StyleSheet, Text, View, Image, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Search from '../components/Search';

const MusicScreen = () => {

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


  const [isPlay, setIsPlay] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: `#D6E0F5` }}>

      <Search />

      {/* music */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 30, marginRight: 30
        }}>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
            <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
          </View>
          <View style={{ position: 'absolute', right: 0, marginTop: 10, marginRight: 10 }}>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </View>
        </View>

      </ScrollView>

      {/* song runing */}
      <View style={{ width: `100%`, height: 70, position: `absolute`, backgroundColor: `#ffffff`, bottom: 58, backgroundColor: 'rgba(0,0,0,0.9)', flexDirection: 'row', paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
        <Image source={{ uri: 'http://i.ibb.co/182bP1y/4k.png' }} style={{ width: 50, height: 50, borderRadius: 10 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', }}>name</Text>
          <Text style={{ fontWeight: 'light', fontSize: 14, color: 'white', }}>artist</Text>
        </View>
        <FontAwesome
          onPress={() => setIsPlay(!isPlay)}
          name={isPlay ? "play" : "pause"} size={24} color="white"
          style={{ position: 'absolute', right: 30 }}
        />
      </View>

    </SafeAreaView>
  )
}

export default MusicScreen

const styles = StyleSheet.create({})