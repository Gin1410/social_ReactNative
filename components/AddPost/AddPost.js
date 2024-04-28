import { StyleSheet, View, Image, TextInput, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

const AddPost = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log('Error accessing the image gallery:', error);
    }
  };


  return (
    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
      <TouchableOpacity onPress={handleImagePicker}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={{ width: 150, height: 150 }} />
        ) : (
          <Image
            source={require('../../assets/image/placeholderIMG.png')}
            style={{ width: 150, height: 150 }}
          />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="your caption"
        style={{ paddingLeft: 10, width: 215, fontSize: 17 }}
      />
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({})
