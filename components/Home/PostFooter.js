import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, deleteLike } from '../../store/home/likeSlice';

const PostFooter = ({ post }) => {
  const dispatch = useDispatch();
  const likedPosts = useSelector(state => state.like.likedPosts);

  // Check if the post is liked based on the likedPosts array
  const liked = likedPosts.includes(post.id);

  const handleLike = () => {
    // If the post is already liked, remove the like, otherwise add it
    if (liked) {
      dispatch(deleteLike(post.id, likedPosts));
    } else {
      dispatch(addLike(post.id, likedPosts));
    }
  };

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginRight: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={handleLike}>
            <AntDesign name={liked ? 'heart' : 'hearto'} size={24} color={liked ? '#DD0000' : 'black'} />
            <Text style={{ color: "black" }}> {post.like_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
            <Feather name="message-circle" size={24} color="black" />
            <Text style={{ color: "black" }}> {post.comment_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 4, marginTop: -17 }}>
            <Feather style={{ marginLeft: 7 }} name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather style={{ marginLeft: 10, marginTop: -15 }} name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostFooter;
