import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomProfileButton = (props) => {
    
  return (
    <TouchableOpacity style={styles.touch} onPress={props.onPress}>
    <View style={styles.touchinVIew}>
        <View style={styles.touchincircle}>
            <Ionicons 
            name={props.name} size={24} color={props.color} />
        </View>
        <Text style={[styles.touchintext, {color:props.colors}]}>{props.Text}</Text>
    </View>
    <View>
        <Ionicons name={'chevron-forward'} size={24} color={'rgba(85, 85, 85, 1)'} />
    </View>
</TouchableOpacity>
  )
}

export default CustomProfileButton

const styles = StyleSheet.create({
    touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        borderBottomColor:'rgba(232, 243, 241, 1)',
        borderBottomWidth:1.5,
        marginVertical:9,
        padding:5
    },
    touchincircle: {
        backgroundColor: 'rgba(232, 243, 241, 1)',
        padding: 7,
        borderRadius: 21,
    },
    touchinVIew: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchintext: {
        // color:props,
        // color: 'rgba(255, 92, 92, 1)',
        fontSize: 16,
        marginHorizontal: 10
    }
})