import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../utils/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import AccountButton from '../components/AccountButton'
import CustomModal from '../components/CustomModal';

const LoginScreens = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  const [modalNameData, setModalNameData] = useState('');

  const openModal = () => {
    setModalData('Yeay! Welcome Back Once again you login successfully into Doctora app');
    setModalNameData('loginScreen')
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ backgroundColor: theme.colors.primary, justifyContent: 'space-evenly', flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: 25, }}>
        <View style={{}}>
          <Entypo name={'chevron-thin-left'} size={25} onPress={() => navigation.replace('started')} />
        </View>
        <View style={{}}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>
            Login
          </Text>
        </View>
        <View />
        <View />
      </View>
      <View style={{ alignItems: 'center' }}>
        <CustomTextInput placeholder='Enter Your Email' />
        <CustomTextInput placeholder='Enter Your Password' />
      </View>
      <View>
        {/* <Button title="Open Modal" onPress={openModal} /> */}
        <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData,modalData]} />
      </View>
      <View style={{}}>
        <Text style={styles.txt} onPress={() => Alert.alert('added soon')}>Forgot Password?</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <CustomButton Text='Login' onPress={openModal} color={theme.colors.secondry} />
      </View>
      <Text style={{ color: 'rgba(113, 119, 132, 1)', textAlign: 'center' }}>Don’t have an account?<Text style={{ color: theme.colors.secondry }} onPress={() => navigation.navigate('signup')}> Sign Up</Text></Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(229, 231, 235, 1)', marginLeft: 40 }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center', color: 'rgba(161, 168, 176, 1)' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(229, 231, 235, 1)', marginRight: 40 }} />
      </View>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <AccountButton name3='google' Text='Sign in with Google' color={'red'} />
        <AccountButton name3='phone' Text='Sign in with Phone' color={'rgba(16, 22, 35, 1)'} />
        <AccountButton name3='facebook' Text='Sign in with Facebook' color={'rgba(53, 119, 229, 1)'} />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({
  txt: {
    color: theme.colors.secondry,
    textAlign: 'right',
    marginHorizontal: 20,
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