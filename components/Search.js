import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: -10, marginBottom: 20, width: 330, backgroundColor: '#FFFFFF', padding: 10, borderRadius: 30, elevation: 12, }}>
            <Ionicons name="search" size={24} color="black" marginRight={10} marginLeft={5} />
            <TextInput type="text" placeholder="Search" />
            <View style={{position:'absolute', right: 15, top: 10}}>
                <Feather name="mic" size={24} color="black" />            
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})