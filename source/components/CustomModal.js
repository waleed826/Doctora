// ModalComponent.js
import React, { useState } from 'react';
import { View, Text, Button, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utils/styles';
import CustomButton from './CustomButton';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const CustomModal = ({ customData, visible, closeModal }) => {
  const navigation = useNavigation()
  const loginButton = () => {
    closeModal()
    navigation.replace('tab')
  }
  const signupButton = () => {
    closeModal()
    navigation.navigate('login')
  }
  const cancelButton = () => {
    closeModal()
  }
  const logoutButton = () => {
    closeModal()
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    navigation.replace('login')
  }


  return (

    <Modal isVisible={visible} animationType="slide" backdropOpacity={0.4} hasBackdrop={true} onBackdropPress={closeModal} >
      {/* <View style={{ justifyContent: 'center',backgroundColor:'rgba(255,255,255,)' }}> */}
      <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 40, alignItems: 'center', }}>
        

        {/* <Text>Custom Modal</Text> */}
        {customData[0] == 'loginScreen' ?
        <>
        <View style={{ backgroundColor: 'rgba(25, 154, 142, 0.1)', padding: 25, borderRadius: 50 }}>
        <Feather name='check' color={theme.colors.secondry} size={55} />
      </View>
          <View style={{ padding: 20 }}>
            <Text style={{ color: 'black', fontWeight: '800', fontSize: 20, marginVertical: 10 }}>{customData[1].slice(0, 18)}</Text>
            <Text style={{ color: 'gray', textAlign: 'center' }}>{customData[1].slice(19, 69)}</Text>
          </View></>
          :
          null

        }
        {customData[0] == 'signupScreen' ?
        <>
        <View style={{ backgroundColor: 'rgba(25, 154, 142, 0.1)', padding: 25, borderRadius: 50 }}>
        <Feather name='check' color={theme.colors.secondry} size={55} />
      </View>
          <View style={{ padding: 20 }}>
            <Text style={{ color: 'black', textAlign: 'center', fontWeight: '700', fontSize: 30, margin: 10 }}>{customData[1].slice(0, 7)}</Text>
            <Text style={{ color: 'gray', textAlign: 'justify' }}>{customData[1].slice(7, 55)}</Text>
          </View>
        </>
          :
          null
        }
        {customData[0] == 'loginScreen' ?
          <CustomButton Text='Go to home' colors={theme.colors.primary} color={theme.colors.secondry} onPress={loginButton} />
          :
          null
        }
        {customData[0] == 'signupScreen' ?

          <CustomButton Text='Login'
          colors={theme.colors.primary}
          color={theme.colors.secondry}
            onPress={signupButton}
          />
          :
          null
        }
        {customData[0] == 'profileScreen' ?

          <>
          <View style={{ backgroundColor: 'rgba(25, 154, 142, 0.1)', padding: 25, borderRadius: 50 }}>
          <Feather name='log-out' color={theme.colors.secondry} size={55} />
        </View>
            <Text style={{ color: 'black', textAlign: 'center', fontWeight: '700', fontSize: 25,  }}>{customData[1]}</Text>
            <CustomButton Text='Log Out' color={theme.colors.secondry}
              onPress={logoutButton}
              colors={theme.colors.primary}
            />
            <CustomButton Text='cancel' color={theme.colors.primary}
              onPress={cancelButton}
              colors={theme.colors.secondry}
            /></>
          :
          null
        }

      </View>
      {/* </View> */}
    </Modal>

  );
};

export default CustomModal;
