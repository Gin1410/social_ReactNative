import { StyleSheet, View, Image, TextInput, TouchableOpacity, PermissionsAndroid, Button, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { addPost, getPosts } from '../../store/home/postSlice';

const AddPost = ({ navigation }) => {

  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

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

  const handlePost = async () => {
    try {
      // Dispatch the addPost action
      await dispatch(addPost(image, caption));
  
      // Reset the state after posting
      setImage(null);
      setCaption('');
  
      // Dispatch getPosts only after addPost is completed
      await dispatch(getPosts());
  
      // Navigate to the HomeScreen
      navigation.navigate('HomeScreen');
  
      // Show a success message
      ToastAndroid.show('Post Success', ToastAndroid.SHORT);
    } catch (error) {
      // Handle errors if necessary
      console.error('Error while posting:', error.message);
    }
  };
  

  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
        <TouchableOpacity onPress={pickImage}>
          {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
          {!image && <Image source={require('../../assets/image/placeholderIMG.png')} style={{ width: 150, height: 150 }} />}
        </TouchableOpacity>
        <TextInput
          placeholder="Your caption"
          placeholderTextColor={'white'}
          style={{ paddingLeft: 10, width: 215, fontSize: 17 }}
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
      </View>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={handlePost}
          style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", elevation: 10, backgroundColor: '#635A8F', padding: 15, marginTop: 20, width: 200 }}
        >
          <Text style={{ color: 'white', fontWeight: '700' }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({})
