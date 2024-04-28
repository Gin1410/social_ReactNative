import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getUser } from '../../store/person/getUserSlice';
import { useDispatch, useSelector } from 'react-redux';


const Infgeneral = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.getUser.user);
    // console.log(user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={{ uri: user.avatar}} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={{ fontSize: 25, fontWeight: 500 }}>{user.name}</Text>
            </View>
        </View>
    )
}

export default Infgeneral

const styles = StyleSheet.create({})