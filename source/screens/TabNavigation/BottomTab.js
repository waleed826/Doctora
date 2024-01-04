import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName='home'
    screenOptions={{
        headerShown: false,
        
        // tabBarActiveTintColor: 'white',
        // tabBarInactiveTintColor: 'gray',
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'black',
        // tabBarHideOnKeyboard:true,
        // tabBarStyle: {
        //     //    margin:10,
        //     //     padding: 10,
        //     backgroundColor: 'rgba(189, 214, 132,0.3)',
        // },
    }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})