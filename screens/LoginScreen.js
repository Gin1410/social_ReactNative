import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = async () => {
        console.log(email, password);

        if (email !== '' && password !== '') {
            try {
                const loginSuccessful = await dispatch(login(email, password));

                if (loginSuccessful) {
                    navigation.navigate('BottomNavigate');
                    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
                } else {
                    // This block will be executed if the login fails
                    ToastAndroid.show('Login failed', ToastAndroid.SHORT);
                }
            } catch (error) {
                console.error('An error occurred during login:', error);
            }
        }
    };

    return (
        <LinearGradient
            colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/image/logo_fff.png")}
                />

                <Text
                    style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 20 }}
                >Log In</Text>

                <View style={{ top: 20, flexDirection: 'column' }}>

                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <AntDesign name="mail" size={20} color="white" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder='Your email'
                            placeholderTextColor='white'
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <AntDesign name="lock" size={20} color="white" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder='Password'
                            placeholderTextColor='white'
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Entypo
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            name={isPasswordVisible ? "eye-with-line" : "eye"} size={20} color="white"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => { handleLogin() }}
                        style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", elevation: 10, backgroundColor: '#635A8F', padding: 10, marginTop: 10 }}
                    >
                        <Text style={{ color: 'white', fontWeight: '700' }}>Log In</Text>
                    </TouchableOpacity>

                </View>

                {/* sign in by other  */}
                <View style={{ marginTop: 60, alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10 }}>
                        Or contact with
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 150 }}>
                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "black", borderWidth: 1, width: 40, height: 40 }}>
                            <AntDesign name="google" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "black", borderWidth: 1, width: 40, height: 40 }}>
                            <FontAwesome name="facebook-f" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "black", borderWidth: 1, width: 40, height: 40 }}>
                            <FontAwesome5 name="discord" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                {/* have an account?  */}
                <View>
                    <Text style={{ marginTop: 30, marginBottom: 10 }}>
                        Have an account?
                        <Text
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={{ color: "blue" }}
                        > Sign up</Text>
                    </Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
