import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: props.color,padding:10,margin:5, justifyContent:'flex-start',alignItems:'center',opacity:9,width:'70%',borderRadius:30}} onPress={props.onPress} >
      <Text style={[styles.txt, {color:props.colors}]}
      >{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles =StyleSheet.create({
    txt:{ 
        textAlign: 'center',
        fontSize:20,
        fontFamily:theme.fonts.regular,
    }
})