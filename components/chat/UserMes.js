import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Provider } from 'react-native-paper';


import { useNavigation } from '@react-navigation/native';


const UserMes = ({ chatUser }) => {

    const navigation = useNavigation();

    // Tách thông tin về giờ và phút từ chuỗi thời gian
    const splitDateTime = chatUser.created.split(' ');
    const timeComponents = splitDateTime[1].split(':');
    const formattedTime = `${timeComponents[0]}:${timeComponents[1]}`;

    return (

        <Provider>
            <TouchableOpacity
                onPress={() => navigation.navigate('Message', { chatUserId: chatUser.id})}
            >
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{ uri: chatUser.avatar }} style={{ width: 55, height: 55, borderRadius: 50, borderWidth: 1, borderColor: "white" }} />
                    </View>

                    <View style={{ flexDirection: 'column', }}>
                        <View style={{ marginTop: 3 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>{chatUser.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '65%', marginTop: 7 }}>
                                <Text style={{ color: 'white' }}>{chatUser.msg}</Text>
                            </View>

                            <View style={{ width: '20%', marginTop: 7, }}>
                                <Text style={{ color: 'white' }}>{formattedTime}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Provider>
    );
};

export default UserMes;
