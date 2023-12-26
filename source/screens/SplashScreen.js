import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const SplashScreen = () => {
  return (
    <View style={styles.views}>
      <Image source={require('../assets/images/whitevector.png')} />
      <Text style={styles.txt}>Medics</Text>
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
        fontFamily:theme.fonts.thin,
    },
})