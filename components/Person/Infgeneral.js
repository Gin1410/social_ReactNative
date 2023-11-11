import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Infgeneral = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={{ fontSize: 25, fontWeight: 500 }}>Name User</Text>
            </View>
        </View>
    )
}

export default Infgeneral

const styles = StyleSheet.create({})