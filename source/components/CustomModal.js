// ModalComponent.js
import React, {useState} from 'react';
import { View, Text, Button, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utils/styles';
import CustomButton from './CustomButton';
import  Modal  from 'react-native-modal';

const CustomModal = ({ visible, closeModal, customData }) => {

  return (
    <Modal isVisible={visible} animationType="slide" backdropOpacity={0.4} hasBackdrop={true} onBackdropPress={closeModal} >
      {/* <View style={{ justifyContent: 'center',backgroundColor:'rgba(255,255,255,)' }}> */}
        <View style={{ backgroundColor: 'white', padding: 40, borderRadius:40,alignItems:'center', }}>
            <View style={{backgroundColor:'rgba(25, 154, 142, 0.1)',padding:25,borderRadius:50}}>
                <Feather name='check' color={theme.colors.secondry} size={55} />
            </View>
       
          {/* <Text>Custom Modal</Text> */}
            { customData[0] == 'loginScreen' ?
          <View style={{padding:20}}>
          <Text style={{color:'black' ,fontWeight:'800',fontSize:20,marginVertical:10}}>{customData[1].slice(0,18)}</Text>
          <Text style={{color:'gray',textAlign:'center'}}>{customData[1].slice(19,69)}</Text>
          </View>
          :
          null
          
            }
            { customData[0] == 'signupScreen' ?
          <View style={{padding:20}}>
          <Text style={{color:'black', textAlign:'center' ,fontWeight:'700',fontSize:30,margin:10}}>{customData[1].slice(0,7)}</Text>
          <Text style={{color:'gray',textAlign:'justify'}}>{customData[1].slice(7,55)}</Text>
          </View>
          :
          null
            }
          <CustomButton Text='Login' color={theme.colors.secondry} onPress={closeModal}/>
        </View>
      {/* </View> */}
    </Modal>
  );
};

export default CustomModal;
