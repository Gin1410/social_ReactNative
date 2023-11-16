import { Text, View, TouchableOpacity, Image, StyleSheet, BackHandler, Alert, Modal } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
            
            <TouchableOpacity>
                <Image
                    style={{ width: 100, height: 50 }}
                    source={require("../../assets/image/logo_fff.png")}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={{ backgroundColor: "#FF3250", position: "absolute", left: 20, bottom: 18, width: 25, height: 18, borderRadius: 25, alignItems: "center", justifyContent: "center", zIndex: 50 }}>
                    <Text style={{ color: "white", fontWeight: 600, }}>11</Text>
                </View>
                <AntDesign style={{ marginLeft: 10, }} name="message1" size={24} color="white" />
            </TouchableOpacity>
        
        </View>
    );
};
export default Header