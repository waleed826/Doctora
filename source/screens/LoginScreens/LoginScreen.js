import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/styles'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'

const LoginScreens = () => {
  return (
    <View style={{flex:1,backgroundColor:theme.colors.primary,}}>
      <CustomTextInput placeholder='Enter Your Email' />
      <CustomTextInput placeholder='Enter Your Password' />
      <CustomButton Text='Login' color={theme.colors.secondry} />
    </View>
  )
}

export default LoginScreens

const styles = StyleSheet.create({})