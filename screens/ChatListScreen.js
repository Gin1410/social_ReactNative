import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

const ChatListScreen = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, paddingTop: 30, elevation: 12 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Ionicons name="chevron-back" size={24} color="#0066CC" />
          <Text style={{ fontSize: 17 }}>Back</Text>
        </View>
        <View style={{alignItems:'center', justifyContent: 'center', display: 'flex'}}>
          <Text >Chat List</Text>
        </View>
      </View>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({})