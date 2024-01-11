import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../utils/styles'

const CustomCategories = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.main}>
            <View style={styles.innerview}>
                <Image source={props.require} style={styles.img} />
            </View>
            <Text style={styles.txt}>{props.Text}</Text>
        </TouchableOpacity>
    )
}

export default CustomCategories

const styles = StyleSheet.create({
    main: {
        // backgroundColor:theme.colors.primary,
        opacity: 9,
        alignItems: 'center',
        // elevation:5,
        padding:8,
    },
    innerview: {
        backgroundColor: theme.colors.primary,
        padding: 20,
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        elevation: 1,
        borderRadius: 16
    },
    txt: {
        color: 'rgba(161, 168, 176, 1)',
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    img: {
        alignSelf: 'center'
    }
})