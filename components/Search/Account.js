import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const Account = ({ post }) => {

    const onFollow = () => {
        console.log("Followed")
    }

    const onUnfollow = () => {
        console.log("Unfollowed")
    }


    return (
        <View style={{ flexDirection: "row", margin: 10, height: 50, alignItems: "center", marginLeft: 30, alignSelf: 'flex-start', width: 320 }}>
            <Image source={{ uri: `http://i.ibb.co/182bP1y/4k.png` }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: 'medium', fontSize: 18 }}>name</Text>
                <Text style={{ fontWeight: 'light', fontSize: 14 }}>artist</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                {post.status === "Follow" ? (
                    <TouchableOpacity onPress={onFollow} style={styles.followButton}>
                        <Text style={styles.buttonText}>{post.status}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onUnfollow} style={styles.unfollowButton}>
                        <Text style={styles.buttonText}>{post.status}</Text>
                    </TouchableOpacity>
                )}

            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    followButton: {
        backgroundColor: "#6495ED",
        outline: 'none',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: 35,
        width: 80,
        opacity: 1,
        elevation: 10,
    },
    unfollowButton: {
        backgroundColor: "#555555",
        outline: 'none',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: 35,
        width: 80,
        opacity: 1,
        elevation: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    }

})

export default Account;