import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, Fontisto } from '@expo/vector-icons';

const UpdateInfor = ({ route, navigation }) => {

    const { userId } = route.params;
    const user = useSelector((state) => state.getUser.user);
    // console.log(user);

    return (

        <LinearGradient
            colors={['#5d44d9', '#9E77EC', '#D195EE', '#CECBD3']}
            style={{ flex: 1 }}
        >

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'space-evenly' }}>

                <View>
                    <Text style={styles.title}>UserName</Text>
                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <Ionicons name="person-outline" size={20} color="black" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder={user.name}
                            placeholderTextColor='#D7D7D7'
                        // onChangeText={text => setEmail(text)}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Birthday</Text>
                    <View
                        style={{ width: 300, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 30, flexDirection: "row", alignItems: "center", paddingLeft: 15, marginBottom: 15 }}
                    >
                        <AntDesign name="mail" size={20} color="white" />
                        <TextInput
                            style={{ paddingLeft: 10, width: 215, color: 'white' }}
                            placeholder={user.email}
                            placeholderTextColor='#D7D7D7'
                        // onChangeText={text => setEmail(text)}
                        />
                    </View>
                </View>

            </View>
        </LinearGradient>
    )
}

export default UpdateInfor

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 16,
        bottom: 5,
        fontWeight: 'bold',
    }
})