import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
    const ProfileInfo = (props) => {
        return (
            <View style={styles.view1} onPress={props.onPress}>
                <View style={styles.touchVIew}>
                    <MaterialCommunityIcons
                        name={props.name} size={29} color={theme.colors.primary} />
                    <Text style={[styles.touchtext, { color: props.colors }]}>{props.Text}</Text>
                    <Text style={styles.touchtext1}>{props.Text1}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, zIndex: 1 }}>
            <ImageBackground
                resizeMode='stretch'
                style={{ backgroundColor: 'rgba(25, 154, 142, 1.0)' }}
                source={require('../assets/images/Group.png')}
            >
                <TouchableOpacity style={{ opacity: 9, alignSelf: 'flex-end', marginRight: 15, marginTop: 20, position: 'relative' }}>
                    <Ionicons name={'ellipsis-vertical-sharp'} size={25} color={theme.colors.primary} style={{}} />
                </TouchableOpacity>
                <View style={styles.firstView}>
                    {/* <Image style={{alignSelf:'flex-end'}} source={require('../assets/images/Group.png')} /> */}
                    <View
                        style={{ alignItems: 'center', justifyContent: 'flex-end' }}
                    >
                        <Image
                            style={{ height: 110, width: 110 }}
                            source={require('../assets/images/eallipse.png')} />
                        <View style={{ backgroundColor: 'white', position: 'relative', left: 35, bottom: 28, padding: 3, borderRadius: 14 }}>
                            <MaterialCommunityIcons name={'camera-outline'} size={20} color={'#199A8E'} style={{}} />
                        </View>
                        <Text style={{ fontFamily: theme.fonts.bold, color: theme.colors.primary, fontSize: 20 }} >Amelia Renata</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ProfileInfo name={'heart-pulse'} Text={'Heart rate'} colors={'#C1F3EF'} Text1={'215bpm'} />
                            <ProfileInfo name={'fire'} Text={'Calories'} colors={'#C1F3EF'} Text1={'756cal'} />
                            <ProfileInfo name={'dumbbell'} Text={'Weight'} colors={'#C1F3EF'} Text1={'103lbs'} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.secondView}>
                <CustomProfileButton name={'heart-outline'} Text={'My Saved'} color='rgba(25, 154, 142, 1)' colors={theme.colors.tertiary} />
                <CustomProfileButton name={'document-text-outline'} Text={'Appointmnet'} color='rgba(25, 154, 142, 1)' colors={theme.colors.tertiary} />
                <CustomProfileButton name={'wallet-outline'} Text={'Payment Method'} color='rgba(25, 154, 142, 1)' colors={theme.colors.tertiary} />
                <CustomProfileButton name={'chatbubble-ellipses-outline'} Text={'FAQs'} color='rgba(25, 154, 142, 1)' colors={theme.colors.tertiary} onPress={() => openFAQs()} />
                <CustomProfileButton name={'alert-circle-outline'} Text={'Logout'} color='rgba(255, 92, 92, 1)' colors='rgba(255, 92, 92, 1)' onPress={() => openModal()} />
                <FAQsModal visible={faqsVisible} closeModal={closeFAQs}
                // customData={[modalNameData,modalData]} 
                />
                <CustomModal visible={modalVisible} closeModal={closeModal} customData={[modalNameData, modalData]} />
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
        backgroundColor: 'rgba(25, 154, 142, 0.1)',
        zIndex: 9,
        alignItems: 'center',
        justifyContent: 'center'
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
    view1: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 9,
        padding: 5
    },
    touchVIew: {
        borderRightColor: '#C1F3EF',
        borderRightWidth: 1.5,
        // flexDirection: 'row',
        alignItems: 'center',
    },
    touchtext: {
        // color:props,
        // color: 'rgba(255, 92, 92, 1)',
        fontSize: 11,
        // marginHorizontal: 10
    },
    touchtext1: {
        // color:props,
        // color: 'rgba(255, 92, 92, 1)',
        color: theme.colors.primary,
        fontSize: 15,
        fontFamily: theme.fonts.bold,
        marginHorizontal: 10
    },
})