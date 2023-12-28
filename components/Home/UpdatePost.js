import { SafeAreaView } from 'react-native-safe-area-context'

import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet, View, Image, TextInput, TouchableOpacity, PermissionsAndroid, Button, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { addPost, getPosts, updatePost } from '../../store/home/postSlice';

const UpdatePost = ({ route, navigation}) => {

    const dispatch = useDispatch();
    const { post } = route.params;
    // console.log(post);

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

    const handleUpdatePost = async () => {
        try {
            await dispatch(updatePost(post.id, image, caption));
            navigation.navigate('HomeScreen');
            ToastAndroid.show('Update success', ToastAndroid.SHORT);
        } catch (error) {
            console.error('Error updating post:', error.message);
        }
    };

    return (
        <LinearGradient
            colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
            style={{ flex: 1 }}
        >
            <SafeAreaView>

                <View>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
                        <TouchableOpacity onPress={pickImage}>
                            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
                            {!image && <Image source={{ uri: post.image }} style={{ width: 150, height: 150 }} />}
                        </TouchableOpacity>
                        <TextInput
                            placeholder={post.caption}
                            placeholderTextColor={'white'}
                            style={{ paddingLeft: 10, width: 215, fontSize: 17 }}
                            value={caption}
                            onChangeText={(text) => setCaption(text)}
                        />
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={handleUpdatePost}
                            style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", elevation: 10, backgroundColor: '#635A8F', padding: 15, marginTop: 20, width: 200 }}
                        >
                            <Text style={{ color: 'white', fontWeight: '700' }}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}
export default UpdatePost

const styles = StyleSheet.create({})