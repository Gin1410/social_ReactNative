import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, Feather, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { io } from 'socket.io-client';
import { SOCKET } from '../../data/config';

import { getChatMsg, addChatMsg } from '../../store/chat/chatMsgSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Message({ route, navigation }) {
  const userId = useSelector((state) => state.getUser.user.id);
  const { chatUserId, chatUser } = route.params;
  const dispatch = useDispatch();
  const msgs = useSelector((state) => state.chatMsg.msgs);
  // console.log(msgs);

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    dispatch(getChatMsg(chatUserId));
  }, [dispatch, chatUserId]);

  useEffect(() => { 
    const newSocket = io(SOCKET, { json: false });

    // console.log('User ID:', userId);
    // console.log('Chat User ID:', chatUserId);

    // Lắng nghe sự kiện khi có tin nhắn từ server
    newSocket.on('server-send-message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    setSocket(newSocket);

    // Clean up the socket connection when the component is unmounted
    return () => {
      newSocket.disconnect();
    };
  }, [userId, chatUserId]);

  const combinedMessages = [...msgs, ...messages];
  // console.log(combinedMessages);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      socket.emit('client-send-message', inputMessage);
      setInputMessage('');
      dispatch(addChatMsg(chatUserId, inputMessage));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ position: 'absolute', top: 0, zIndex: 40, backgroundColor: '#5644AD', width: '100%', height: 90 }}>
        <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <AntDesign name="left" size={24} color="white" style={{ width: '10%' }} onPress={() => navigation.goBack()} />

          <View style={{ flexDirection: 'row', width: '60%' }}>
            <Image source={{ uri: chatUser.avatar }} style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{chatUser.name}</Text>
              <Text style={{ color: 'white' }}>Online</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
            <FontAwesome name="phone" size={22} color="white" />
            <FontAwesome name="video-camera" size={22} color="white" />
            <Entypo name="dots-three-vertical" size={22} color="white" />
          </View>
        </View>
      </View>

      {/* Message List */}
      <View style={{ flex: 1, marginTop: 90, }}>
        <ImageBackground
          source={require('../../assets/image/bgMsg.jpg')} // Replace with the actual path to your image
          style={{ flex: 1 }}
        >
          <FlatList
            data={combinedMessages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={{ alignSelf:  (item.id == socket?.id || userId == item.sender_id) ? 'flex-end' : 'flex-start', borderRadius: 20, backgroundColor: '#635A8F', width: 'auto', maxWidth: '50%', margin: 5, padding: 10, color: 'white' }}>
                {`${item.message}`}
              </Text>
            )}
          />

        </ImageBackground>
      </View>


      <View style={{ backgroundColor: '#5644AD', justifyContent: 'center' }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, margin: 10, marginRight: 20, marginLeft: 20, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', width: '25%' }}>
              <Entypo name="circle-with-plus" size={24} color="#938DA3" />
              <Entypo name="image-inverted" size={24} color="#938DA3" />
              <MaterialIcons name="keyboard-voice" size={24} color="#938DA3" />
            </View>

            <TextInput
              style={{ flex: 1, backgroundColor: '#D9D9D9', borderRadius: 20, padding: 5, marginLeft: 10, marginRight: 10 }}
              onChangeText={setInputMessage}
              value={inputMessage}
            />

            <FontAwesome name="send" size={24} color="#938DA3" onPress={sendMessage} />
          </View>

        </KeyboardAvoidingView>
      </View>
    </View>



    // <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    // <FlatList
    //   data={messages}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({ item }) => (
    //     <Text style={{ alignSelf: item.id === socket?.id ? 'flex-end' : 'flex-start' }}>
    //       {`${item.id === socket?.id ? 'You' : 'User'}: ${item.message}`}
    //     </Text>
    //   )}
    // />
    // <KeyboardAvoidingView behavior="padding">
    //   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //     <TextInput
    //       style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
    //       onChangeText={setInputMessage}
    //       value={inputMessage}
    //     />
    //     <Button onPress={sendMessage} title="Send" />
    //   </View>
    // </KeyboardAvoidingView>
    // </View>
  );
}
