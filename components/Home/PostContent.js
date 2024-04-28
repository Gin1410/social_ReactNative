import { Text, View, Image, StyleSheet, } from 'react-native'

const PostContent = ({ post }) => {
    return (
        <View>
            <View style={{ margin: 10 }}>
                <Text style={{color: 'white', fontSize: 15}}>{post.caption}</Text>
            </View>

            {post.imageUrl !== "" && (
                <View style={{ width: "100%", height: 300, borderColor: 'white', borderWidth: 1, borderRadius: 20 }}>
                    <Image source={{ uri: post.image }} style={{ height: "100%", borderRadius: 20 }} />
                </View>
            )}

            {post.imageUrl == "" && (
                <View style={{ borderBottomColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth }}></View>
            )}
        </View>

    )
}


export default PostContent