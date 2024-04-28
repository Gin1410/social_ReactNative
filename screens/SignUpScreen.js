import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { API_URL } from '../data/config';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

import { useDispatch } from 'react-redux';
import { signup } from '../store/authSlice';

const SignUpScreen = ({ navigation }) => {

    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSignup = () => {
        console.log(name, email, password);
        dispatch(signup(name, email, password)).then(() => {
            navigation.navigate('LoginScreen');
            ToastAndroid.show('SignUp Success', ToastAndroid.SHORT);
          });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderColor: "#AAAAAA", borderWidth: 1, borderRadius: 20 }}>
            <View style={{ justifyContent: "center", alignItems: "center", margin: 30 }}>
                <Image
                    style={{ width: 150, height: 150, marginTop: -20 }}
                    source={require("../assets/image/logo.png")}
                    resizeMode='cover'
                />

                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Getting Started!
                </Text>

                {/* form */}
                <View style={{ marginTop: 30, flexDirection: "column", alignItems: "center", }}>
                    <View style={{ borderColor: "#AAAAAA", borderWidth: 1, width: 280, height: 50, flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRadius: 15 }}>
                        <Ionicons name="person-outline" size={20} color="black" />
                        <TextInput
                            placeholder="UserName"
                            style={{ paddingLeft: 10, width: 230 }}
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                    </View>

                    <View style={{ borderColor: "#AAAAAA", borderWidth: 1, width: 280, height: 50, flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRadius: 15, marginTop: 20 }}>
                        <AntDesign name="mail" size={20} color="black" />
                        <TextInput
                            placeholder="Email"
                            style={{ paddingLeft: 10, width: 230 }}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                    </View>

                    <View style={{ borderColor: "#AAAAAA", borderWidth: 1, width: 280, height: 50, flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRadius: 15, marginTop: 20 }}>
                        <AntDesign name="lock" size={20} color="black" />
                        <TextInput
                            placeholder="Password"
                            style={{ paddingLeft: 10, width: 215 }}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />
                        <Entypo
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            name={isPasswordVisible ? "eye" : "eye-with-line"} size={20} color="black"
                        />
                    </View>

                    <TouchableOpacity
                         onPress={() => { handleSignup() }}
                        style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 40, elevation: 3, backgroundColor: 'black' }}
                    >
                        <Text style={{ color: 'white' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                {/* sign in by other  */}
                <View style={{ alignItems: 'center', justifyContent: "center", }}>
                    <Text style={{ marginTop: 30, marginBottom: 10 }}>
                        Or contact with
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 150 }}>
                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "#AAAAAA", borderWidth: 1, width: 40, height: 40 }}>
                            <AntDesign name="google" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "#AAAAAA", borderWidth: 1, width: 40, height: 40 }}>
                            <FontAwesome name="facebook-f" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", borderColor: "#AAAAAA", borderWidth: 1, width: 40, height: 40 }}>
                            <FontAwesome5 name="discord" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                {/* have an account?  */}
                <View>
                    <Text style={{ marginTop: 30, marginBottom: 10 }}>
                        Have an account?
                        <Text
                            style={{ color: "blue" }}
                            onPress={() => navigation.navigate('LoginScreen')}>
                            Log in</Text>
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
