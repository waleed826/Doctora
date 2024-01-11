import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.vew}>
      <View style={styles.viw}>
        <Image source={require('../assets/images/Vector.png')} style={{ width: 100, height: 100, }} />
        <Text style={styles.txt}>Medics</Text>
        <Text style={styles.txt1}>Let’s get started!</Text>
        <Text style={styles.txt2}>Login to enjoy the features we’ve provided, and stay healthy!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('login')} style={[styles.touch, { backgroundColor: theme.colors.secondry }]}>
        <Text style={[styles.txt3, { color: theme.colors.primary }]}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.touch, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.txt3, { color: theme.colors.secondry }]}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  vew: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viw: {
    alignItems: 'center'
  },
  txt1: {
    color: theme.colors.tertiary,
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    margin: 4,
  },

  txt: {
    color: theme.colors.secondry,
    fontFamily: theme.fonts.bold,
    fontSize: 30,
    margin: 4,
  },
  txt2: {
    fontFamily: theme.fonts.medium,
    marginHorizontal: 15,
    textAlign: 'center',
    margin: 5,
  },
  touch: {
    borderWidth: 1,
    borderColor: theme.colors.secondry,
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
    width: '70%',
    borderRadius: 30
  },
  txt3: {
    padding: 10,
    textAlign: 'center',
    fontFamily: theme.fonts.medium
  }
})