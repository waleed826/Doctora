import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import CalendarScreen from '../CalendarScreen';
import MessageScreen from '../MessageScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '../../utils/styles';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName='home'
    screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
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
      <Tab.Screen name="home" component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
              <View style={{}}>
                  <Ionicons color={focused ? theme.colors.secondry:'gray' } name={focused ? 'home':'home-outline' } size={focused ? 35:25} />
              </View>
          )
      },
      }} />
      <Tab.Screen name="message" component={MessageScreen} 
      options={{
        tabBarIcon: ({ focused }) => {
          return (
              <View style={{}}>
                  <Ionicons color={focused ? theme.colors.secondry:'gray' } name={focused ? 'mail':'mail-outline' } size={focused ? 35:25} />
              </View>
          )
      },
      }}
      />
      <Tab.Screen name='calendar' component={CalendarScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
              <View style={{}}>
                  <Ionicons color={focused ? theme.colors.secondry:'gray' } name={focused ? 'calendar-sharp':'calendar-outline' } size={focused ? 35:25} />
              </View>
          )
      },
      }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} 
      options={{
        tabBarIcon: ({ focused }) => {
          return (
              <View style={{}}>
                  <Ionicons color={focused ? theme.colors.secondry:'gray' } name={focused ? 'person':'person-outline' } size={focused ? 35:25} />
              </View>
          )
      },
      }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})