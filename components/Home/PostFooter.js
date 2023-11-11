import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

const PostFooter = ({ post }) => {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginRight: 10 }}>

                <View style={{ flexDirection: "row", alignItem: "center", marginLeft: 10 }}>
                    <TouchableOpacity style={{ alignItems: "center", alignContent: "center" }}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <Text style={{ color: "black" }}> {post.likes.toLocaleString('en')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
                        <Feather name="message-circle" size={24} color="black" />
                        <Text style={{ color: "black" }}> {post.comments.length} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
                        <Feather style={{ marginLeft: 7, marginTop: 1 }} name="send" size={24} color="black" />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity>
                    <Feather style={{ marginLeft: 10, marginTop: -15 }} name="bookmark" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <View style={{ margin: 10 }}>
                <Text style={{ color: "gray" }}>View{post.comments.length > 1 ? ' all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}</Text>
            </View>
        </View>
    )
}

export default PostFooter;