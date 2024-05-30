import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
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

const NewPassword = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState('');
    const [modalNameData, setModalNameData] = useState('');
    const openModal = () => {
        setModalData('Success You have successfully reset your password.');
        setModalNameData('newpassword')
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      }
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
                    Create New Password
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'rgba(161, 168, 176, 1)' }}>
                    Create your new password to login
                    </Text>
                </View>
            </View>
           <View style={{ alignItems: 'center' }}>
        <CustomTextInput placeholder='Enter New Password'  secureTextEntry={true} />
        <CustomTextInput placeholder='Confirm Password' secureTextEntry={true}  />
      </View>
            <View>
        <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData, modalData]} />
      </View>
            <View style={{ alignItems: 'center' }}>
                <CustomButton Text='Create Password'
                    //   onPress={signIn}
                    onPress={()=>openModal()} 
                    // onPress={()=>auth()}
                    // onPress={()=>navigation.navigate('veirfycode')}
                    colors={theme.colors.primary}
                    color={theme.colors.secondry} />
            </View>
        </KeyboardAwareScrollView>
    // <View>
    //   <Text>VerifyCode</Text>
    // </View>
  )
}

export default NewPassword

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
    input:{
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#199A8E',
        marginHorizontal:20,
        paddingHorizontal:20,
        fontSize:30,
        fontWeight:'700',
        borderRadius:10,
        textAlign:'center'
    }
})