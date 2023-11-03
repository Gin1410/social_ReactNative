import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const MusicScreen = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <SafeAreaView>

      {/* header */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 7, textAlign: 'center', width: 300 }}>Music</Text>
      </View>

      {/* search */}
      <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, marginBottom: 20, width: 330, backgroundColor: '#FFFFFF', padding: 10, borderRadius: 30, elevation: 12, }}>
        <Ionicons name="search" size={24} color="black" marginRight={10} marginLeft={5} />
        <TextInput type="text" placeholder="Search" />
      </View>

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
      <View style={{ width: `100%`, height: 70, position: `absolute`, backgroundColor: `#ffffff`, bottom: 120, backgroundColor: 'rgba(0,0,0,0.9)', flexDirection: 'row', paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
        <Image source={{ uri: 'http://i.ibb.co/182bP1y/4k.png' }} style={{ width: 50, height: 50, borderRadius: 10 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', }}>name</Text>
          <Text style={{ fontWeight: 'light', fontSize: 14, color: 'white', }}>artist</Text>
        </View>
        <FontAwesome
          onPress={() => setIsPlay(!isPlay)}
          name={isPlay ? "play" : "pause"} size={24} color="white" 
          style={{ position: 'absolute', right: 30}}
        />
      </View>

    </SafeAreaView>
  )
}

export default MusicScreen

const styles = StyleSheet.create({})