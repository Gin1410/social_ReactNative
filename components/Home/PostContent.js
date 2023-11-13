import { Text, View, Image, StyleSheet, } from 'react-native'

const PostContent = ({ post }) => {
    return (
        <View>
            <View style={{ margin: 10 }}>
                <Text>{post.caption}</Text>
            </View>

            {post.imageUrl !== "" && (
                <View style={{ width: "100%", height: 300, }}>
                    <Image source={{ uri: post.image }} style={{ height: "100%", borderRadius: 20 }} />
                </View>
            )}

            {post.imageUrl == "" && (
                <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth }}></View>
            )}
        </View>

    )
}


export default PostContent