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
        
        </View>
    );
};
export default Header