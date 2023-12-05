import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView } from 'react-native';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux'; // Import the necessary Redux hook

export default function Message({ route }) {
  // Assuming "getUser" is the slice name in your Redux store
  const userId = useSelector((state) => state.getUser.user.id);
  const { chatUserId } = route.params;

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const newSocket = io('http://192.168.1.10:3000', { json: false });

    // Access userId and chatUserId here
    console.log('User ID:', userId);
    console.log('Chat User ID:', chatUserId);

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

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Gửi sự kiện khi có tin nhắn mới từ người dùng
      socket.emit('client-send-message', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ alignSelf: item.id === socket?.id ? 'flex-end' : 'flex-start' }}>
            {`${item.id === socket?.id ? 'You' : 'User'}: ${item.message}`}
          </Text>
        )}
      />
      <KeyboardAvoidingView behavior="padding">
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            onChangeText={setInputMessage}
            value={inputMessage}
          />
          <Button onPress={sendMessage} title="Send" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
