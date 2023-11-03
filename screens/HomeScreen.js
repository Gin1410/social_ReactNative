import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux'
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import { POSTS } from '../data/posts'

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};


const Header = () => {
  return (
    <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20, }}>

      {/* left header */}
      {/* opacity when pressed */}
      <TouchableOpacity>
        <Image
          style={{ width: 100, height: 50 }}
          source={require("../assets/image/header_logo.png")}
        />
      </TouchableOpacity>

      {/* right header */}
      <View style={{ flexDirection: "row" }}>

        <TouchableOpacity onPress={{}}>
          <AntDesign style={{ marginLeft: 10, }} name="plussquareo" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign style={{ marginLeft: 10, }} name="hearto" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ backgroundColor: "#FF3250", position: "absolute", left: 20, bottom: 18, width: 25, height: 18, borderRadius: 25, alignItems: "center", justifyContent: "center", zIndex: 50 }}>
            <Text style={{ color: "white", fontWeight: 600, }}>11</Text>
          </View>
          <AntDesign style={{ marginLeft: 10, }} name="message1" size={24} color="black" />
        </TouchableOpacity>

      </View>
    </View>
  );
};


const Post = ({ post }) => {

  return (
    <View style={{ marginBottom: 10 }}>
      {/* line */}
      <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth }}></View>


      {/* PostHeader */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 5, marginBottom: 7 }}>
        <View style={{ flexDirection: "row", alignItem: "center", marginTop: 7, marginLeft: 7 }}>
          <Image source={{ uri: post.profile_picture }} style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1.6, borderColor: "#ff8501" }} />
          <Text style={{ color: "black", marginLeft: 5, fontWeight: '700', textAlignVertical: "center" }}>{post.user}</Text>
        </View>

        <Text style={{ color: "black", marginRight: 10 }}>...</Text>
      </View>


      {/* postbody : image*/}
      <View style={{ width: "100%", height: 450 }}>
        <Image source={{ uri: post.imageUrl }} style={{ height: "100%" }} ></Image>
      </View>


      {/* postfooter */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginRight: 10 }}>

        <View style={{ flexDirection: "row", alignItem: "center", marginLeft: 10 }}>
          <TouchableOpacity style={{ alignItems: "center", alignContent: "center" }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text style={{ color: "black" }}> {post.likes.toLocaleString('en')} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
            <Feather name="message-circle" size={24} color="black" />
            <Text style={{ color: "black" }}> {post.comments.length} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
            <Feather style={{ marginLeft: 7, marginTop: 1 }} name="send" size={24} color="black" />
          </TouchableOpacity>

        </View>

        <TouchableOpacity>
          <Feather style={{ marginLeft: 10, marginTop: -15 }} name="bookmark" size={24} color="black" />
        </TouchableOpacity>

      </View>


      {/* caption */}
      <View style={{ margin: 10 }}>
        <Text style={{ color: "black" }}>{post.caption}</Text>
        {/* comment count */}
        <Text style={{ color: "gray" }}>View{post.comments.length > 1 ? ' all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}</Text>
      </View>

    </View>
  )
}

export default HomeScreen