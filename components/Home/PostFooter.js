import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

const PostFooter = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginRight: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
          // onPress={handleLike}
          >
            {/* <AntDesign name={liked ? 'heart' : 'hearto'} size={24} color={liked ? '#DD0000' : 'white'} /> */}
            {post.like_status == 1 ? (
              <AntDesign name='heart' size={24} color='#DD0000' />
            ) : (
              <AntDesign name='hearto' size={24} color='white' />
            )}
            <Text style={{ color: "white" }}> {post.like_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
            <Feather name="message-circle" size={24} color="white" />
            <Text style={{ color: "white" }}> {post.comment_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 4, marginTop: -17 }}>
            <Feather style={{ marginLeft: 7 }} name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather style={{ marginLeft: 10, marginTop: -15 }} name="bookmark" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;