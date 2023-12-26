import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const CustomTextInput = (props) => {
  return (
    <View style={styles.fixView}>
     <TextInput
                placeholder={props.placeholder}
                maxLength={props?.length}
                keyboardType={props?.keyboardType}
                placeholderTextColor={'black'}
                style={{ width: '70%', fontFamily:theme.fonts.light }}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  fixView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    elevation: 3
}
})