import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, {useState} from 'react'
import theme from '../utils/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomProfileButton from '../components/CustomProfileButton'
import CustomModal from '../components/CustomModal'
import FAQsModal from '../components/FAQsModal'


const ProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [faqsVisible, setFAQsVisible] = useState(false);
    const [modalData, setModalData] = useState('');
    const [modalNameData, setModalNameData] = useState('');
    const openModal = () => {
        setModalData('Are you sure to log out of your account?');
        setModalNameData('profileScreen')
        setModalVisible(true);
      };
    const openFAQs = () => {
        setFAQsVisible(true);
      };
      const closeModal = () => {
        setModalVisible(false);
        
      }
      const closeFAQs = () => {
        setFAQsVisible(false);
       
      }
    return (
        <View style={{ flex: 1, zIndex: 1 }}>
            <View style={styles.firstView}>
                <Image style={{alignSelf:'flex-end'}} source={require('../assets/images/Group.png')} />
            </View>
            <View style={styles.secondView}>
                <CustomProfileButton name={'heart-outline'} Text={'My Saved'} color='rgba(25, 154, 142, 1)'  colors={theme.colors.tertiary}/>
                <CustomProfileButton name={'document-text-outline'} Text={'Appointmnet'} color='rgba(25, 154, 142, 1)'  colors={theme.colors.tertiary}/>
                <CustomProfileButton name={'wallet-outline'} Text={'Payment Method'} color='rgba(25, 154, 142, 1)'  colors={theme.colors.tertiary}/>
                <CustomProfileButton name={'chatbubble-ellipses-outline'} Text={'FAQs'} color='rgba(25, 154, 142, 1)'  colors={theme.colors.tertiary} onPress={()=>openFAQs()} />
                <CustomProfileButton name={'alert-circle-outline'} Text={'Logout'} color='rgba(255, 92, 92, 1)' colors='rgba(255, 92, 92, 1)' onPress={()=>openModal()} />
                <FAQsModal visible={faqsVisible} closeModal={closeFAQs} 
                // customData={[modalNameData,modalData]} 
                />
                <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData,modalData]}  />
            </View>
        </View>

    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    firstView: {
        height: 350,
        backgroundColor: 'rgba(25, 154, 142, 0.8)',
        zIndex: 9
    },
    secondView: {
        backgroundColor: theme.colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 400,
        zIndex: 20,
        bottom: 30,
        padding: 20
    },
    touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center'
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
        color: 'rgba(255, 92, 92, 1)',
        fontSize: 16,
        marginHorizontal: 10
    }
})