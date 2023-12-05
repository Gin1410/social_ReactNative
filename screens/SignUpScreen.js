import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import DatePicker from 'react-native-modern-datepicker';
// import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, Fontisto } from '@expo/vector-icons';

import { API_URL } from '../data/config';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

import { useDispatch } from 'react-redux';
import { signup } from '../store/authSlice';

import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = ({ navigation }) => {

    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    // const [openCalendar, setOpenCalendar] = React.useState(false);
    // const today = new Date(); // Get the current date
    // const formattedToday = today.toISOString().split('T')[0]; // Format it as "YYYY-MM-DD"
    // const [date, setDate] = useState(formattedToday);

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

    // const handleOnCalendar = () => {
    //     // console.log("close calendar");
    //     setOpenCalendar(!openCalendar);
    // };

    // const handleChange = newDate => {
    //     setDate(newDate);
    // };

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
                >Register</Text>

                <View style={{ top: 20, flexDirection: 'column' }}>

                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <Ionicons name="person-outline" size={20} color="white" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder='Your name'
                            placeholderTextColor='white'
                            onChangeText={text => setName(text)}
                        />
                    </View>

                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <AntDesign name="mail" size={20} color="white" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder='Email'
                            placeholderTextColor='white'
                            onChangeText={text => setEmail(text)}
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

                    {/* <View>
                        <Text style={{ color: 'white', bottom: 6, fontSize: 16 }}>Birth of date</Text>

                        <View style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}>
                            <Fontisto name="date" size={20} color="white" />
                            <TouchableOpacity
                                onPress={handleOnCalendar}
                            >
                                <Text style={{ paddingLeft: 10, color: 'white' }}>
                                    {date || 'Select a date'}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={openCalendar}
                            style={{ borderRadius: 20 }}
                        >

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ backgroundColor: '#090C08', width: '90%', padding: 0, alignItems: 'center', borderRadius: 10 }}>

                                    <DatePicker
                                        options={{
                                            backgroundColor: '#090C08',
                                            textHeaderColor: '#FFA25B',
                                            textDefaultColor: '#F6E7C1',
                                            selectedTextColor: '#fff',
                                            mainColor: '#F4722B',
                                            textSecondaryColor: '#D6C7A1',
                                            borderColor: 'rgba(122, 146, 165, 0.1)',
                                        }}
                                        current={formattedToday}
                                        selected={date}
                                        onDateChange={handleChange}
                                        mode="calendar"
                                        minuteInterval={30}
                                        style={{ borderRadius: 10 }}
                                    />

                                    <TouchableOpacity
                                        onPress={handleOnCalendar}
                                        style={{ top: -10, padding: 10 }}
                                    >
                                        <Text style={{ color: 'white' }}>Close</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </Modal>
                    </View> */}

                    <TouchableOpacity
                        onPress={() => { handleSignup() }}
                        style={{ borderRadius: 30, alignItems: 'center', justifyContent: "center", elevation: 10, backgroundColor: '#635A8F', padding: 15, marginTop: 10 }}
                    >
                        <Text style={{ color: 'white', fontWeight: '700' }}>Register</Text>
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
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={{ color: "blue" }}
                        > Log in</Text>
                    </Text>
                </View>

            </View>

        </LinearGradient>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
