import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider, TextInput } from 'react-native-paper';


const Message = ({ route }) => {

    const { chatUserId } = route.params;
    console.log(chatUserId);
    
    return (
        <View>
            <Text>Message</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({})