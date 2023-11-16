import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cmt = ({cmt}) => {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItem: "center", marginTop: 7, borderTopColor: `#555555`, borderTopWidth: 0.3, paddingTop: 10 }}>
                <Image source={{ uri: cmt.avatar }} style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1.6, borderColor: "#ff8501" }} />
                <Text style={{ color: "black", marginLeft: 10, fontWeight: '700', textAlignVertical: "center" }}>{cmt.name}</Text>
            </View>
            <View style={{ marginLeft: 50, width: 280 }}>
                <Text>{cmt.content}</Text>
                {/* {post.imageUrl !== "" && (
                <View style={{ width: "40%", height: 100, }}>
                    <Image source={{ uri: post.image }} style={{ height: "100%", borderRadius: 20 }} />
                </View>
            )} */}

            </View>
        </View>
    )
}

export default Cmt

const styles = StyleSheet.create({})