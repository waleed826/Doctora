import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import theme from '../utils/styles'
import Entypo from 'react-native-vector-icons/Entypo'

const DrListCumponent = ({ customData, visible, closeModal }) => {
    const Drdata = [
        { Img: require('../assets/images/DCB.png'), heading1: 'Dr. Marcus Horizon', heading2: 'Chardiologist', icon: 'star', rating: '4,9', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCC.png'), heading1: 'Dr. Maria Elena', heading2: 'Psychologist', icon: 'star', rating: '4,8', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCD.png'), heading1: 'Dr. Stevi Jessi', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCE.png'), heading1: 'Dr. Gerty Cori', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
        { Img: require('../assets/images/DCF.png'), heading1: 'Dr. Diandra', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
      ]
  return (
    <Modal isVisible={visible} animationType="slide" coverScreen={true} hasBackdrop={true} style={{backgroundColor:'white',}} onBackdropPress={closeModal} >
      {/* <View style={{ justifyContent: 'center',backgroundColor:'rgba(255,255,255,)' }}> */}
      <View style={{ backgroundColor: 'white', padding: 10, }}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Entypo
            name={'chevron-thin-left'} size={20}
            onPress={closeModal}
            color={theme.colors.tertiary}
            />
            <Text style={styles.heading}>Top Doctor</Text>
            <Entypo
            name={'dots-three-vertical'} size={20}
            color={theme.colors.tertiary}
            />
      </View>
      <View>
     <FlatList
        data={Drdata}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.flatmain}>
              <View>
              <Image source={item.Img} style={{ height: 120, width: 120, borderRadius: 10,margin:4 }} />
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
    </Modal>
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
        opacity:9,
        flexDirection:'row'
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
      RLView:{
alignItems:'flex-start'
      },
      ratingview:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(232, 243, 241, 1)',
        padding:4,
        margin:4,
        borderRadius:5
      },
      locationview:{
        flexDirection:'row',
        alignItems:'center',
        margin:5,
      },
      heading:{
        color: theme.colors.tertiary,
fontFamily:theme.fonts.bold,
fontSize: 18,
      }
})