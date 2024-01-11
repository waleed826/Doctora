import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import theme from '../utils/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
  const checkLogin = async ()=>{
    const login = await AsyncStorage.getItem('@logedIn')
    if(login != null){
      navigation.navigate('tab')
    }
    else {
      navigation.navigate('login')
    }
  }
  useEffect(()=>{
    checkLogin()
  },[])
  return (
    <View style={styles.views}>
      <Image source={require('../assets/images/whitevector.png')} />
      <Text style={styles.txt}>Doctora</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    views:{
        flex:1,
        backgroundColor:theme.colors.secondry,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
    },
    txt:{
        color:theme.colors.primary,
        fontFamily:theme.fonts.extraBold,
        fontSize:30,
    },
})