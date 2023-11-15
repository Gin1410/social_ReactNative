import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../store/home/likeSlice';

const PostFooter = ({ post }) => {
  const dispatch = useDispatch();
  const likedPosts = useSelector(state => state.like.likedPosts);

  // Check if the post is liked based on the likedPosts array
  const liked = likedPosts.includes(post.id);

  const handleLike = () => {
    const isLiked = likedPosts.includes(post.id);

    // If the post is already liked, remove it from likedPosts, otherwise add it
    const updatedLikedPosts = isLiked
      ? likedPosts.filter(id => id !== post.id)
      : [...likedPosts, post.id];

    dispatch(addLike(post.id, updatedLikedPosts)); // Pass the updatedLikedPosts array to the addLike action
  };

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginRight: 10 }}>
        <View style={{ flexDirection: "row", alignItem: "center", marginLeft: 10 }}>
          <TouchableOpacity style={{ alignItems: "center", alignContent: "center" }}
            onPress={handleLike}
          >
            <AntDesign name={liked ? 'heart' : 'hearto'} size={24} color={liked ? '#DD0000' : 'black'} />
            {/* <AntDesign name={'hearto'} size={24} color={'black'} /> */}
            <Text style={{ color: "black" }}> {post.like_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}>
            <Feather name="message-circle" size={24} color="black" />
            <Text style={{ color: "black" }}> {post.comment_count} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: "center", alignContent: "center", marginLeft: 10 }}
          >
            <Feather style={{ marginLeft: 7, marginTop: 1 }} name="send" size={24} color="black" />
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