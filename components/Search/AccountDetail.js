import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,  ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserPosts } from '../../store/search/postUserSlice';
import Post from '../Home/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addfollow, deletefollow } from '../../store/search/followSlice';

const AccountDetail = ({ route }) => {
    const navigation = useNavigation();
    const { followId, followUser, follow } = route.params;
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.postUser);
    const [Dfollow, setDFollow] = useState();

    useEffect(() => {
        dispatch(getUserPosts(followId));
    }, [dispatch, followId]);

    // console.log(posts);

    useEffect(() => {
        { follow == 1 ? setDFollow(true) : setDFollow(false) }
    }, [follow]);

    const handleFollow = () => {
            // setDFollow((prevFollow) => !prevFollow);
        if (Dfollow == 1) {
            dispatch(deletefollow(followUser.id));
            console.log("đã xóa follow")
            // console.log(followUser.id, follow, "follow");
            setDFollow(Dfollow);
            ToastAndroid.show('UnFollow success', ToastAndroid.SHORT);
        } else {
            console.log("đã add follow")
            dispatch(addfollow(followUser.id));
            // console.log(followUser.id, follow, "unfollow");
            setDFollow(!Dfollow);
            ToastAndroid.show('Follow success', ToastAndroid.SHORT);
        }
        setDFollow(!Dfollow);
    };

    return (
        <LinearGradient
            colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
            style={{ flex: 1 }}
        >
            <SafeAreaView>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 0, borderBottomColor: 'white', borderBottomWidth: 1, position: 'absolute', top: 12, left: 0, right: 0, }}>
                    <Image source={{ uri: followUser.avatar }} style={{ width: 150, height: 150, borderRadius: 100, borderColor: 'white', borderWidth: 1 }} />

                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: 500, color: 'white' }}>{followUser.name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 300, color: 'white' }}>{followUser.email}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '55%', marginBottom: 12, }}>
                        <TouchableOpacity
                            onPress={handleFollow}>
                            {Dfollow == 0 ? (
                                <View style={styles.followButton}>
                                    <Text style={styles.buttonText}>Follow</Text>
                                </View>
                            ) : (
                                <View style={styles.unfollowButton}>
                                    <Text style={styles.buttonText}>UnFollow</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.msgBtn}
                            onPress={() => navigation.navigate('Message', { chatUserId: followId, chatUser: followUser })}
                        >
                            <Text style={{ color: '#635A8F', fontWeight: 'bold', fontSize: 18 }}>Chat</Text>
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
