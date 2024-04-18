// import { Button, View, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import auth from '@react-native-firebase/auth';
// import CustomTextInput from '../components/CustomTextInput';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const SignUpScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
//   // const handleSignout = async () => {
//   //   try {
//   //     await auth().signOut();
//   //     console.log('User signed out successfully!');
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   const unsubscribe = auth().onAuthStateChanged((user) => {
//   //     if (user) {
//   //       console.log('User is signed in:|||||||==================>', user);
//   //     } else {
//   //       console.log('User is signed out<<<<<<<<<<<<<<>>>>>>>>>>');
//   //     }
//   //   });
//   //   return () => unsubscribe();
//   // }, []); 
//   // auth().onAuthStateChanged((user) => {
//   //   if (user) {
//   //     console.log('User is signed in:*******>>>>>>>', user); 
//   //   } else {
//   //     console.log('User is signed out*********>>>>>>>');
//   //   }
//   // });
//   const signUp = async () => {
//     try {
//       const response = await auth().createUserWithEmailAndPassword(email, password);
//       if (response.user) {
//         await AsyncStorage.setItem('doctorakey', response.user.uid);
//       }
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
//   const handleSignup = async () => {
//     try {
//       await auth().createUserWithEmailAndPassword(email, password);
//       console.log('User created successfully!');
      
//     } catch (error) {
//       console.error(error);
      
//     }
//   };

//   return (
    
//     <View>
//       <CustomTextInput  placeholder='Enter Your name' name='user' onChangeText={setEmail} />
//          <CustomTextInput placeholder='Enter Your email' name='mail' onChangeText={setPassword} />
//     <Button title="Sign Up" onPress={handleSignup} />
//     <Button title="Sign Out" onPress={handleSignout} />
//     </View>
//   );
// };
//  export default SignUpScreen

import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../utils/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import auth from '@react-native-firebase/auth';
import AccountButton from '../components/AccountButton'
import CustomModal from '../components/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [modalNameData, setModalNameData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalNameData('signupScreen')
    setModalData('Success Your account has been successfully registered');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  }
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // const signupButton = () => {
  //   auth()
  //     .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //       openModal();
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // }
  const signUp = async () => {
        try {
          const response = await auth().createUserWithEmailAndPassword(email, password);
          if (response.user) {
            console.log('created successfully')
            openModal()
            // navigation.navigate('login')
          }
        } catch (error) {
          Alert.alert('Error', error.message);
        }
      };


  return (
    <KeyboardAwareScrollView scrollEnabled={true} contentContainerStyle={{ backgroundColor: theme.colors.primary, justifyContent: 'space-evenly', flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: 25, }}>
        <View style={{}}>
          <Entypo name={'chevron-thin-left'} size={25} onPress={() => navigation.replace('login')} color='black' />
        </View>
        <View style={{}}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>
            Sign Up
          </Text>
        </View>
        <View />
        <View />
      </View>
      <View style={{ alignItems: 'center' }}>
        <CustomTextInput placeholder='Enter Your name' name='user'  />
        <CustomTextInput placeholder='Enter Your email' name='mail' onChangeText={setEmail} />
        <CustomTextInput placeholder='Enter Your password' name='lock' name1='eye-off' onChangeText={setPassword} secureTextEntry={true} />
      </View>
      <View>
        <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData, modalData]} />
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 35, alignItems: 'center' }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          boxType='square'
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.txt} onPress={() => Alert.alert('added soon')}>
          I agree to the medidoc <Text style={{ color: theme.colors.secondry }}>Terms of Service</Text> and <Text style={{ color: theme.colors.secondry }}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <CustomButton Text='Sign Up' colors={theme.colors.primary} color={theme.colors.secondry} onPress={signUp} />
      </View>
      <Text style={{ color: 'rgba(113, 119, 132, 1)', textAlign: 'center' }}>Don’t have an account?<Text style={{ color: theme.colors.secondry }}> Login</Text></Text>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  txt: {
    color: 'gray',
    textAlign: 'right',
    marginHorizontal: 20,
    textAlign: 'left',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
    marginLeft: -5, // Adjust spacing between letters if needed
  },
  blue: {
    color: 'blue',
    marginLeft: -5, // Adjust spacing between letters if needed
  },

})