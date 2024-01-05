import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const AccountButton = (props) => {
  return (
    <TouchableOpacity style={styles.touch} >
       
       {/* <View>
       <Fontisto name={props.name2} size={30} color='red'/>
       </View> */}
       <View>
       <MaterialCommunityIcons  name={props.name3} size={30} color={props.color}/>
       </View>
       {/* <View>
       <Entypo name={props.name1} size={30} color={'rgba(53, 119, 229, 1)'} />
       </View> */}
    <View>
    <Text style={styles.txt}>{props.Text}</Text>
    </View>

    </TouchableOpacity>
  )
}

export default AccountButton

const styles = StyleSheet.create({
    txt:{
        color: 'black', 
        fontSize:15,
        fontFamily:fonts.semiBold
        },
        touch:{
           borderWidth:1,
           borderColor: 'rgba(229, 231, 235, 1)', 
           height: 60,
           width:'90%', 
           justifyContent: 'space-evenly',
           alignItems:'center', 
           margin:10, 
           borderRadius: 30,
           flexDirection:'row'
        },
})