import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'
import AppIntroSlider from 'react-native-app-intro-slider'
import Icon from 'react-native-vector-icons/FontAwesome6'

const OnboardScreens =[
    {
      img:require('../assets/images/xmf.png'),
      heading:'Consult only with a doctor you trust',
    },
    {
      img:require('../assets/images/xm.png'),
      heading:'Find a lot of specialist doctors in one place',
    },
    {
      img:require('../assets/images/xmd.png'),
      heading:'Get connect our Online Consultation',
    },
  ]
const OnboardingScreens = ({navigation}) => {
  return (
    <View style={{flex:1, 
    backgroundColor:theme.colors.primary,
    }}>
      <AppIntroSlider
      showSkipButton={true}
      showDoneButton={true}
      data={OnboardScreens}
    onSkip={()=>navigation.replace('started')}
    onDone={()=>navigation.replace('started')}
      
    //   skipLabel={()=>{
    //     return(
    //         <View><Text>skipLabel</Text></View>
    //     )
    //   }}
    renderItem={({item,index})=>{
        return(
            <View style={{ alignItems:'center',justifyContent:'center',flex:1,}}>
                <Image source={item.img} />
                <Text style={{fontFamily:theme.fonts.bold}} >{item.heading}</Text>
            </View>
        )
    }}
    renderDoneButton={()=>{
        return(
          <View style={{padding:15,backgroundColor:theme.colors.secondry,borderRadius:30}}>
            <Icon name={'arrow-right-long'} size={20} color={theme.colors.primary}/>
            </View>
        )
      }}
    dotStyle={{backgroundColor:theme.colors.secondry, opacity:0.2 , height:5,width:15}}
    activeDotStyle={{backgroundColor:theme.colors.secondry,height:5,width:15}}
    renderNextButton={()=>{
        return(
            <View style={{padding:15,backgroundColor:theme.colors.secondry,borderRadius:30}}>
            <Icon name={'arrow-right-long'} size={20} color={theme.colors.primary}/>
            </View>
        )
      }}
      
    renderSkipButton={()=>{
        return(
            <View style={{padding:15,borderRadius:30}}>
            <Text style={{color:'rgba(128,128,128,0.7)'}}>Skip</Text>
            </View>
        )
      }}
      />
    </View>
  )
}

export default OnboardingScreens

const styles = StyleSheet.create({})