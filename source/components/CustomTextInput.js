import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'
import Feather from 'react-native-vector-icons/Feather'

const CustomTextInput = (props) => {
  return (
    <View style={styles.fixView}>
      <Feather  name={props.name} size={20}/>
     <TextInput
                placeholder={props.placeholder}
                maxLength={props?.length}
                keyboardType={props?.keyboardType}
                placeholderTextColor={'rgba(161, 168, 176, 1)'}
                style={{ width: '70%', fontFamily:theme.fonts.light }}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
            <Feather name={props.name1} size={20}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  fixView: {
    backgroundColor: 'rgba(229, 231, 235, 1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    margin: 10,
    borderRadius: 230,
    elevation: 3,
    width:'80%',
    alignItems:'center',

}
})