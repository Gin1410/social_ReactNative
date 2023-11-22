// import { ScrollView, BackHandler, Alert, View, TextInput, ActivityIndicator, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import React, { useEffect, useState, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetSearchUser, searchUser } from '../store/search/searchUserSlice';

// const Account = ({ user }) => {

//     console.log(user);

//     return (
//         <View
//             style={{
//                 flexDirection: 'row',
//                 margin: 10,
//                 height: 50,
//                 alignItems: 'center',
//                 marginLeft: 30,
//                 alignSelf: 'flex-start',
//                 width: 320,
//             }}
//         >
//             <Image
//                 source={{ uri: user.avatar }}
//                 style={{
//                     width: 50,
//                     height: 50,
//                     borderRadius: 50,
//                     borderWidth: 1,
//                     borderColor: 'white',
//                 }}
//             />
//             <View style={{ marginLeft: 10 }}>
//                 <Text style={{ fontWeight: 'medium', fontSize: 18, color: 'white' }}>{user.name}</Text>
//                 <Text style={{ fontWeight: 'light', fontSize: 14, color: 'white' }}>{user.email}</Text>
//             </View>
//             <View style={{ position: 'absolute', right: 0 }}>
//                 {user.follow == 1 ? (
//                     <TouchableOpacity style={styles.followButton}>
//                         <Text style={styles.buttonText}>Follow</Text>
//                     </TouchableOpacity>
//                 ) : (
//                     <TouchableOpacity style={styles.unfollowButton}>
//                         <Text style={styles.buttonText}>Unfollow</Text>
//                     </TouchableOpacity>
//                 )}
//             </View>
//         </View>
//     );
// };

// export default Account;


// const styles = StyleSheet.create({
//     followButton: {
//         backgroundColor: '#6495ED',
//         outline: 'none',
//         borderRadius: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//         height: 35,
//         width: 80,
//         opacity: 1,
//         elevation: 10,
//     },
//     unfollowButton: {
//         backgroundColor: '#555555',
//         outline: 'none',
//         borderRadius: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//         height: 35,
//         width: 80,
//         opacity: 1,
//         elevation: 10,
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
// });