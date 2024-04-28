import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { Foundation } from '@expo/vector-icons';

const Infdetail = () => {
  return (
    <View>
        <View style={{ backgroundColor: `#D6E0F5`, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 500, padding: 10, }}>My Self</Text>
        </View>
        <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
          <Foundation name="mail" size={24} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#0066CC', fontSize: 15, fontWeight: 500}}>Email</Text>
            <Text>ptnquynhta@gmail.com</Text>
          </View>
        </View>
        <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
          <Foundation name="mail" size={24} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#0066CC', fontSize: 15, fontWeight: 500}}>Email</Text>
            <Text>ptnquynhta@gmail.com</Text>
          </View>
        </View>
        <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
          <Foundation name="mail" size={24} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#0066CC', fontSize: 15, fontWeight: 500}}>Email</Text>
            <Text>ptnquynhta@gmail.com</Text>
          </View>
        </View>
        <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
          <Foundation name="mail" size={24} color="black" />
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#0066CC', fontSize: 15, fontWeight: 500}}>Email</Text>
            <Text>ptnquynhta@gmail.com</Text>
          </View>
        </View>
      </View>
  )
}

export default Infdetail

const styles = StyleSheet.create({})