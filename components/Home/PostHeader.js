import { Text, View, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Menu, } from 'react-native-paper';
import { BackHandler, Alert } from 'react-native'

const PostHeader = ({ post }) => {

    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setVisible(true);
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setVisible(false)
        setIsOpen(false);
    };

    const handleDelete = () => {
        closeMenu();
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this post?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => console.log("Post deleted")
                }
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 5, }}>

            <View style={{ flexDirection: "row", alignItem: "center", marginTop: 7, marginLeft: 7 }}>
                <Image source={{ uri: post.avatar  }} style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1.6, borderColor: "#ff8501" }} />
                <Text style={{ color: "black", marginLeft: 10, fontWeight: '700', textAlignVertical: "center" }}>{post.name}</Text>
            </View>

            <View
                style={{
                    paddingTop: 10,
                }}
            >
                <Menu
                    style={{
                        top: 30,
                        left: 325,
                        marginLeft: -100,
                    }}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button onPress={openMenu}>
                            <MaterialCommunityIcons
                                name={visible ? 'menu-up' : 'menu-down'}
                                size={30}
                                color="black"
                            />
                        </Button>
                    }
                >
                    <Menu.Item onPress={handleDelete} title="Update" />
                    <Menu.Item onPress={handleDelete} title="Delete" />
                </Menu>

            </View>

        </View>
    )
}

export default PostHeader;