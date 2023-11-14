import { StyleSheet, View, Image, TextInput, TouchableOpacity, PermissionsAndroid, Button, Text } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

const AddPost = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [12, 10],
      quality: 1,
    });

    console.log(result);  

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
        <TouchableOpacity
          onPress={pickImage}
        >
          {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
          {!image && <Image source={require('../../assets/image/placeholderIMG.png')} style={{ width: 150, height: 150 }} />}
          
        </TouchableOpacity>
        <TextInput
          placeholder="your caption"
          style={{ paddingLeft: 10, width: 215, fontSize: 17 }}
        />
      </View>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          // onPress={() => { handleLogout() }}
          style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 20, elevation: 3, backgroundColor: 'black' }}
        >
          <Text style={{ color: 'white' }}>Add Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({})
