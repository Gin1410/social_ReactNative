import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Like = ({like}) => {
  return (
    <View>
            <View style={{ flexDirection: "row", alignItem: "center", marginTop: 7, borderTopColor: `black`, borderTopWidth: 1, paddingTop: 10 }}>
                <Image source={{ uri: like.avatar }} style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1.6, borderColor: "#ff8501" }} />
                <Text style={{ color: "black", marginLeft: 10, fontWeight: '700', textAlignVertical: "center" }}>{like.name}</Text>
            </View>
        </View>
  )
}

export default Like

const styles = StyleSheet.create({})