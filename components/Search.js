import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 20, marginBottom: 20, width: 330, backgroundColor: '#635A8F', padding: 10, borderRadius: 30,}}>
            <Ionicons name="search" size={24} color="white" marginRight={10} marginLeft={5} />
            <TextInput type="text" placeholder="Search" placeholderTextColor={'white'}/>
            <View style={{position:'absolute', right: 15, top: 10}}>
                <Feather name="mic" size={24} color="white" />            
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})