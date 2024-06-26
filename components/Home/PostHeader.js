import { Text, View, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Menu, } from 'react-native-paper';
import { BackHandler, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../store/home/postSlice';

import { getUser } from '../../store/person/getUserSlice';

const PostHeader = ({ post, navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.getUser.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // console.log(post);

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
                    onPress: async () => {
                        try {
                            await dispatch(deletePost(post.id));
                            ToastAndroid.show('Delete success', ToastAndroid.SHORT);
                        } catch (error) {
                            // Handle the error, show a message, etc.
                            console.error("Error deleting post:", error.message);
                        }
                    }
                }
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 5 }}>

            <View style={{ flexDirection: "row", alignItem: "center", marginTop: 7, marginLeft: 7 }}>
                <Image source={{ uri: post.avatar }} style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1, borderColor: "white" }} />
                <Text style={{ color: "white", marginLeft: 10, fontWeight: '700', textAlignVertical: "center", fontSize: 17 }}>{post.name}</Text>
            </View>

            {/* <Text>{post.user_id}</Text>
            <Text>{user.id}</Text> */}
            {post.user_id == user.id && (
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
                                    size={35}
                                    color="white"
                                />
                            </Button>
                        }
                    >
                        <Menu.Item onPress={() => navigation.navigate('UpdatePost', {post:post})} title="Update" />
                        <Menu.Item onPress={handleDelete} title="Delete" />
                    </Menu>
                </View>
            )}
        </View>
    )
}

export default PostHeader;