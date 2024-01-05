import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './source/screens/SplashScreen';
import OnboardingScreens from './source/screens/OnboardingScreens';
import GetStarted from './source/screens/GetStarted';
// import LoginScreens from './source/screens/LoginScreen';
import SignUpScreen from './source/screens/SignUpScreen';
import HomeScreen from './source/screens/HomeScreen';
import CustomModal from './source/components/CustomModal';
import BottomTab from './source/screens/TabNavigation/BottomTab';

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
      <Stack.Navigator initialRouteName='signup' screenOptions={{headerShown:false,}}>
        {
          showSplash ? <Stack.Screen name='splash' component={SplashScreen}  />
          :
          <Stack.Screen name='onboard' component={OnboardingScreens}  />
        }
        {/* <Stack.Group children={CustomModal} navigationKey='modal'/> */}
        <Stack.Screen name='started' component={GetStarted} />
        {/* <Stack.Screen name='login' component={LoginScreens} /> */}
        <Stack.Screen name='signup' component={SignUpScreen} />
        {/* <Stack.Screen name='modal' component={CustomModal} /> */}
        <Stack.Screen name='tab' component={BottomTab} />
        <Stack.Screen name='home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})