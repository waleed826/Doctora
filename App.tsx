import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './source/screens/SplashScreen';
import OnboardingScreens from './source/screens/OnboardingScreens';
import GetStarted from './source/screens/GetStarted';
import LoginScreens from './source/screens/LoginScreen';
import SignUpScreen from './source/screens/SignUpScreen';
import HomeScreen from './source/screens/HomeScreen';
import CustomModal from './source/components/CustomModal';
import BottomTab from './source/screens/TabNavigation/BottomTab';
import FindDoctors from './source/screens/DoctorDtails/FindDoctors';
import DoctorDteils from './source/screens/DoctorDtails/DoctorDteils';
import ForgetPassword from './source/screens/ForgetPassword';
import VerifyCode from './source/screens/VerifyCode';
import NewPassword from './source/screens/NewPassword';

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
        <Stack.Screen name='fpass' component={ForgetPassword} />
        <Stack.Screen name='veirfycode' component={VerifyCode} />
        <Stack.Screen name='newpassword' component={NewPassword} />
        <Stack.Screen name='signup' component={SignUpScreen} />
        <Stack.Screen name='tab' component={BottomTab} />
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='find' component={FindDoctors} />
        <Stack.Screen name='details' component={DoctorDteils} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})