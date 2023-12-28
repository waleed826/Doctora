import { Alert, StyleSheet, Text, View,KeyboardAvoidingView,Button } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../utils/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import AccountButton from '../components/AccountButton'
import CustomModal from '../components/CustomModal';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [modalNameData, setModalNameData] = useState('');

  const openModal = () => {
    setModalNameData('signupScreen')
    setModalData('Success Your account has been successfully registered');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  }
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
  return (
    <KeyboardAwareScrollView   scrollEnabled={true}  contentContainerStyle={{ backgroundColor: theme.colors.primary,justifyContent:'space-evenly',flexGrow:1 }}>
      <View style={{ flexDirection: 'row',alignItems:'baseline',justifyContent:'space-between',marginHorizontal:25,  }}>
        <View style={{  }}>
          <Entypo name={'chevron-thin-left'} size={25} onPress={()=>navigation.replace('login')} color='black' />
        </View>
        <View style={{  }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color:'black'}}>
            Sign Up
          </Text>
        </View>
          <View/>
          <View/>
      </View>
      <View style={{alignItems:'center'}}>
      <CustomTextInput placeholder='Enter Your name' name='user' />
      <CustomTextInput placeholder='Enter Your email' name='mail' />
      <CustomTextInput placeholder='Enter Your password' name='lock' name1='eye-off' />
      </View>
      <View>
      <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData,modalData]} />
    </View>
      <View style={{flexDirection:'row',marginHorizontal:35,alignItems:'center'}}>
      <CheckBox
    disabled={false}
    value={toggleCheckBox}
    boxType='square'
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
        <Text style={styles.txt} onPress={() => Alert.alert('added soon')}>
            I agree to the medidoc <Text style={{color:theme.colors.secondry}}>Terms of Service</Text> and <Text style={{color:theme.colors.secondry}}>Privacy Policy</Text>
            </Text>
      </View>
      <View style={{alignItems:'center'}}>
      <CustomButton Text='Sign Up' color={theme.colors.secondry} onPress={openModal} />
      </View>
      <Text style={{ color: 'rgba(113, 119, 132, 1)',textAlign:'center' }}>Don’t have an account?<Text style={{ color: theme.colors.secondry }}> Sign Up</Text></Text>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  txt: {
    color: 'gray',
    textAlign:'right',
    marginHorizontal:20,
    textAlign:'left',
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