import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import theme from '../utils/styles'
import Entypo from 'react-native-vector-icons/Entypo'

const width = Dimensions.get('window').height;

const DrListCumponent = ({ customData, visible, closeModal }) => {
    const navigation = useNavigation()
    const threeDots = () => {
        navigation.navigate('find'),
            closeModal()
    }
    const Drdata = [
        { Img: require('../assets/images/DCB.png'), heading1: 'Dr. Marcus Horizon', heading2: 'Chardiologist', icon: 'star', rating: '4,9', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCC.png'), heading1: 'Dr. Maria Elena', heading2: 'Psychologist', icon: 'star', rating: '4,8', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCD.png'), heading1: 'Dr. Stevi Jessi', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCE.png'), heading1: 'Dr. Gerty Cori', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCF.png'), heading1: 'Dr. Diandra', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
    ]
    return (
        <Modal isVisible={visible} animationType="slide" hardwareAccelerated={true} hasBackdrop={true} style={{ backgroundColor: 'white', flex: 1, margin: 0 }} onBackdropPress={closeModal} >
            {/* <View style={{ justifyContent: 'center',backgroundColor:'rgba(255,255,255,)' }}> */}
            <View style={{ backgroundColor: 'lightblue', padding: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Entypo
                        name={'chevron-thin-left'} size={20}
                        onPress={closeModal}
                        color={theme.colors.tertiary}
                    />
                    <Text style={styles.heading}>Top Doctors</Text>
                    <Entypo
                        name={'dots-three-vertical'} size={20}
                        color={theme.colors.tertiary}
                        onPress={() => navigation.navigate('find')}
                    // onPress={threeDots()}
                    />
                </View>
                <View>
                    <FlatList
                        data={Drdata}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.flatmain, { marginBottom: Drdata.length - 1 == index ? 80 : 0 }]}>
                                    <View>
                                        <Image source={item.Img} style={{ height: 120, width: 120, borderRadius: 10, margin: 4 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.flathead1}>{item.heading1}{'\n'}</Text>
                                        <Text style={styles.flathead2}>{item.heading2}</Text>
                                        <View style={styles.RLView}>
                                            <View style={styles.ratingview}>
                                                <AntDesign name={item.icon} color={theme.colors.secondry} />
                                                <Text>{item.rating}</Text>
                                            </View>
                                            <View style={styles.locationview}>
                                                <MaterialIcons name={item.icons} />
                                                <Text>{item.Distance}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
            {/* </View> */}
        </Modal >
    )
}

export default DrListCumponent

const styles = StyleSheet.create({
    flatmain: {
        // marginHorizontal: 10,
        marginVertical: 10,
        borderColor: 'rgba(232, 243, 241, 1)',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        // alignItems:'center',
        opacity: 9,
        flexDirection: 'row'
    },
    flathead1: {
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        // fontStyle: 'normal',
        fontWeight: '600',
        color: theme.colors.tertiary
    },
    flathead2: {

    },
    RLView: {
        alignItems: 'flex-start'
    },
    ratingview: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(232, 243, 241, 1)',
        padding: 4,
        margin: 4,
        borderRadius: 5
    },
    locationview: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    heading: {
        color: theme.colors.tertiary,
        fontFamily: theme.fonts.bold,
        fontSize: 18,
    }
})