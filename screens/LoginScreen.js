import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { useState } from 'react';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

import { API_URL } from '../data/config';


const LoginScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderColor: "#AAAAAA", borderWidth: 1, borderRadius: 20 }}>
            <View style={{ justifyContent: "center", alignItems: "center", margin: 30 }}>
                <Image
                    style={{ width: 200, height: 200, marginTop: -50 }}
                    resizeMode='contain'
                    source={require("../assets/image/logo.png")}
                />

                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: -30 }}>
                    Log In
                </Text>

                {/* form */}
                <View style={{ marginTop: 30, flexDirection: "column", alignItems: "center", }}>
                    <View style={{ borderColor: "#AAAAAA", borderWidth: 1, width: 280, height: 50, flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRadius: 15 }}>
                        <AntDesign name="mail" size={20} color="black" />
                        <TextInput
                            placeholder="Email"
                            style={{ paddingLeft: 10, width: 230 }}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <View style={{ borderColor: "#AAAAAA", borderWidth: 1, width: 280, height: 50, flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRadius: 15, marginTop: 20 }}>
                        <AntDesign name="lock" size={20} color="black" />
                        <TextInput
                            placeholder="Password"
                            style={{ paddingLeft: 10, width: 215 }}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Entypo
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            name={isPasswordVisible ? "eye" : "eye-with-line"} size={20} color="black"
                        />
                    </View>

                    <TouchableOpacity
                        // onPress={() => { loginUser() }}
                        onPress={() => navigation.navigate('BottomNavigate')}
                        style={{ borderRadius: 15, alignItems: 'center', justifyContent: "center", width: 100, height: 37, marginTop: 40, elevation: 3, backgroundColor: 'black' }}
                    >
                        <Text style={{ color: 'white' }}>Log In</Text>
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
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={{ color: "blue" }}
                        >Sign up</Text>
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
