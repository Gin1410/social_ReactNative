import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserPosts } from '../../store/search/postUserSlice';
import Post from '../Home/Post';
import { useDispatch, useSelector } from 'react-redux';

const AccountDetail = ({ route }) => {
    const { userId, user } = route.params;
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.postUser);

    useEffect(() => {
        dispatch(getUserPosts(userId));
    }, [dispatch, userId]);

    // console.log(posts);

    return (
        <LinearGradient
            colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
            style={{ flex: 1 }}
        >
            <SafeAreaView>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 0, borderBottomColor: 'white', borderBottomWidth: 1, position: 'absolute', top: 12, left: 0, right: 0, }}>
                    <Image source={{ uri: user.avatar }} style={{ width: 150, height: 150, borderRadius: 100, borderColor: 'white', borderWidth: 1 }} />

                    <View style={{ alignItems: 'center',  marginBottom: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: 500, color: 'white' }}>{user.name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 300, color: 'white' }}>{user.email}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '55%', marginBottom: 12,  }}>
                        {user.follow == 0 ? (
                            <TouchableOpacity style={styles.followButton}>
                                <Text style={styles.buttonText}>Follow</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.unfollowButton}>
                                <Text style={styles.buttonText}>Unfollow</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.msgBtn}>
                            <Text style={{color: '#635A8F',  fontWeight: 'bold', fontSize: 18}}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView
                    style={{ position: 'relative', zIndex: 0, marginTop: 257, }}
                    height={500}
                    contentContainerStyle={{}}
                >
                    {Object.values(posts).map((post, index) => (
                        <Post key={post.id} post={post} />
                    ))}
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>
    );
}

export default AccountDetail;

const styles = StyleSheet.create({
    msgBtn: {
        backgroundColor: '#ffffff',
        outline: 'none',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        width: 100,
        opacity: 1,
        elevation: 10,
        position: 'relative',
        zIndex: 100,
    },  
    followButton: {
        backgroundColor: '#6495ED',
        outline: 'none',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        width: 100,
        opacity: 1,
        elevation: 10,
        position: 'relative',
        zIndex: 100
    },
    unfollowButton: {
        backgroundColor: '#555555',
        outline: 'none',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        width: 100,
        opacity: 1,
        elevation: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold', 
        fontSize: 18
    },
});
