import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Provider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';


const UserMes = ({ chatUser }) => {

    const navigation = useNavigation();

    const splitDateTime = chatUser.created.split(' ');
    // Tách ngày tháng
    const dateComponents = splitDateTime[0].split('-');
    const formattedDate = `${dateComponents[2]}/${dateComponents[1]}`; // Định dạng lại ngày tháng nếu cần
    // Tách giờ phút
    const timeComponents = splitDateTime[1].split(':');
    const formattedTime = `${timeComponents[0]}:${timeComponents[1]}`;
     
    return (

        <Provider>
            <TouchableOpacity
                onPress={() => navigation.navigate('Message', { chatUserId: chatUser.id, chatUser: chatUser })}
            >
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{ uri: chatUser.avatar }} style={{ width: 55, height: 55, borderRadius: 50, borderWidth: 1, borderColor: "white" }} />
                    </View>

                    <View style={{ flexDirection: 'column', left: -15, width: 170 }}>
                        <View style={{ marginTop: 3 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>{chatUser.name}</Text>
                        </View>

                        <View style={{ marginTop: 7, }}>
                            <Text style={{ color: 'white' }}>
                                {chatUser.message.length > 20
                                    ? chatUser.message.slice(0, 20) + '...'
                                    : chatUser.message}
                            </Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 34, flexDirection: 'row' }}>
                        <Text style={{ color: '#CECECE', marginRight: 10 }}>{formattedTime}</Text>
                        <Text style={{ color: '#CECECE' }}>{formattedDate}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </Provider>
    );
};

export default UserMes;
