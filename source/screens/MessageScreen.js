// import React, { useCallback, useState, useLayoutEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// // import { Avatar } from 'react-native-elements';
// import {auth, signOut,db } from '@react-native-firebase/auth'
// // import { auth, db } from '../firebase';
// // import { signOut } from 'firebase/auth';
// import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from '@react-native-firebase/firestore';
// import { GiftedChat, Message } from 'react-native-gifted-chat';

// const MessageScreen = ({ navigation }) => {
//     const [messages, setMessages] = useState([]);
//     const signOutNow = () => {
//         signOut(auth).then(() => {
//             // Sign-out successful.
//             navigation.replace('Login');
//         }).catch((error) => {
//             // An error happened.
//         });
//     }
//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerLeft: () => (
//                 <View style={{ marginLeft: 20 }}>
//                     <Avatar
//                         rounded
//                         source={{
//                             uri: auth?.currentUser?.photoURL,
//                         }}
//                     />
//                 </View>
//             ),
//             headerRight: () => (
//                 <TouchableOpacity style={{
//                     marginRight: 10
//                 }}
//                     onPress={signOutNow}
//                 >
//                     <Text>logout</Text>
//                 </TouchableOpacity>
//             )
//         })

//         const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
//         const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
//             snapshot.docs.map(doc => ({
//                 _id: doc.data()._id,
//                 createdAt: doc.data().createdAt.toDate(),
//                 text: doc.data().text,
//                 user: doc.data().user,
//             }))
//         ));

//         return () => {
//           unsubscribe();
//         };

//     }, [navigation]);

//     const onSend = useCallback((messages = []) => {
//         const { _id, createdAt, text, user,} = messages[0]

//         addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
//     }, []);

//     return (
//         <GiftedChat
//             messages={messages}
//             showAvatarForEveryMessage={true}
//             onSend={messages => onSend(messages)}
//             user={{
//                 _id: auth?.currentUser?.email,
//                 name: auth?.currentUser?.displayName,
//                 avatar: auth?.currentUser?.photoURL
//             }}
//         />
//     );
// }

// export default MessageScreen;

import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const MessageScreen = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        name: 'React Native',
        text: 'Hello developer',
        createdAt: new Date(),
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
        // https:'',
        user: {
          _id: 2,
          name: 'React Native',

          avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
          // https: '',
        },
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        // You can also add a video prop:
        // video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // Mark the message as sent, using one tick
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        pending: true,
        // Any additional custom parameters are passed through
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    // <View>
    //   <Text>MessageScreen</Text>
    // </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})