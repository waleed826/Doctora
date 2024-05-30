import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../utils/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import AccountButton from '../components/AccountButton'
import CustomModal from '../components/CustomModal';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import Line from '../components/Line'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ForgetPassword = ({ navigation }) => {
    const [show, setShow] = useState(false)
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.keybord}>
            <View style={styles.firstview}>
                <View style={{}}>
                    <Entypo
                        name={'chevron-thin-left'} size={25}
                        onPress={() => navigation.replace('login')} />
                </View>
                <View style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>
                        Forgot Your Password?
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'rgba(161, 168, 176, 1)' }}>
                        Enter your email or your phone number, we will send you confirmation code
                    </Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 25, borderRadius: 35, padding: 1, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB' }}>
                <TouchableOpacity
                onPress={()=>setShow(false)}
                    style={[styles.touch,
                        {backgroundColor:show ?   null : '#FFFFFF',}
                    ]}>

                    <Text style={{ fontSize: 14,color:show ?   'gray' : '#199A8E', }}>Email</Text></TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setShow(true)}
                style={[styles.touch,
                    {backgroundColor:show ?  '#FFFFFF' : null,}
                ]}>
                    <Text style={{ fontSize: 14,color:show ?   '#199A8E' : 'gray', }}>Phone</Text></TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                {
                    show ?
                    <CustomTextInput placeholder='Enter Registered Phone'
                        // onChangeText={setEmail} 
                        keyboardType={'number-pad'} />
                    :
                    <CustomTextInput placeholder='Enter Registered Email'
                        // onChangeText={setEmail} 
                        keyboardType={'email-address'} />
                }
            </View>
            <View>
                
            </View>
            <View style={{ alignItems: 'center' }}>
                <CustomButton Text='Reset Password'
                    //   onPress={signIn}
                    // onPress={()=>openModal()} 
                    // onPress={()=>auth()}
                    onPress={()=>navigation.navigate('veirfycode')}
                    colors={theme.colors.primary}
                    color={theme.colors.secondry} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    keybord: {
        backgroundColor: theme.colors.primary,
        justifyContent: 'space-evenly',
        flexGrow: 1
    },
    firstview: {
        marginHorizontal: 25,
    },
    txt: {
        color: theme.colors.secondry,
        textAlign: 'right',
        marginHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    red: {
        color: 'red',
    },
    touch:{ 
        paddingHorizontal: 58, 
        paddingVertical: 15, 
        borderRadius: 30,
    }
})