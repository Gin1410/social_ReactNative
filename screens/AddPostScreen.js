import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';

const AddPostScreen = () => {
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