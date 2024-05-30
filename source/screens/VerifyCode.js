import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
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

const VerifyCode = ({ navigation }) => {
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
                        Enter Verification Code
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'rgba(161, 168, 176, 1)' }}>
                        Enter code that we have sent to your number 08528188***
                    </Text>
                </View>
            </View>
            {/* <View style={{ marginHorizontal: 25, borderRadius: 35, padding: 1, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB' }}>
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
            </View> */}
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                <TextInput placeholder='-' keyboardType='number-pad' placeholderTextColor={'black'} style={styles.input} />
                <TextInput placeholder='-' keyboardType='number-pad' placeholderTextColor={'black'} style={styles.input} />
                <TextInput placeholder='-' keyboardType='number-pad' placeholderTextColor={'black'} style={styles.input} />

            </View>
            <View>

            </View>
            <View style={{ alignItems: 'center' }}>
                <CustomButton Text='Verify'
                    //   onPress={signIn}
                    // onPress={()=>openModal()} 
                    // onPress={()=>auth()}
                    onPress={() => navigation.navigate('newpassword')}
                    colors={theme.colors.primary}
                    color={theme.colors.secondry} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'rgba(113, 119, 132, 1)', textAlign: 'center' }}>
                    Didn’t receive the code?
                    <Text style={{ color: theme.colors.secondry }}
                    // onPress={() => navigation.navigate('signup')}
                    >
                        Resend</Text></Text>
            </View>
        </KeyboardAwareScrollView>
        // <View>
        //   <Text>VerifyCode</Text>
        // </View>
    )
}

export default VerifyCode

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
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#199A8E',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        fontSize: 30,
        fontWeight: '700',
        borderRadius: 10,
        textAlign: 'center'
    }
})