import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './source/screens/SplashScreen';
import OnboardingScreens from './source/screens/OnboardingScreens';
import GetStarted from './source/screens/GetStarted';
import LoginScreens from './source/screens/LoginScreens/LoginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [showSplash, setSplash] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    }, 3000);
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false,}}>
        {
          showSplash ? <Stack.Screen name='splash' component={SplashScreen}  />
          :
          <Stack.Screen name='onboard' component={OnboardingScreens}  />
        }
        <Stack.Screen name='started' component={GetStarted} />
        <Stack.Screen name='login' component={LoginScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})