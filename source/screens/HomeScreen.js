import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utils/styles'
import CustomTextInput from '../components/CustomTextInput'
import CustomCategories from '../components/CustomCategories'
import CustomButton from '../components/CustomButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DrListCumponent from '../components/DrListCumponent'

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  }
  const openModal = () => {
    setModalVisible(true);
  };
  const Drdata = [
    { Img: require('../assets/images/DCB.png'), heading1: 'Dr. Marcus Horizon', heading2: 'Chardiologist', icon: 'star', rating: '4,9', icons: 'location-on', Distance: '800m away' },
    { Img: require('../assets/images/DCC.png'), heading1: 'Dr. Maria Elena', heading2: 'Psychologist', icon: 'star', rating: '4,8', icons: 'location-on', Distance: '800m away' },
    { Img: require('../assets/images/DCD.png'), heading1: 'Dr. Stevi Jessi', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
    { Img: require('../assets/images/DCE.png'), heading1: 'Dr. Gerty Cori', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
    { Img: require('../assets/images/DCF.png'), heading1: 'Dr. Diandra', heading2: 'Orthopedist', icon: 'star', rating: '4,7', icons: 'location-on', Distance: '800m away' },
  ]
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: theme.colors.primary }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 20,justifyContent:'space-between' }}>
        <Text style={styles.text}>Find your desire health solution</Text>
        <Feather name={'bell'} size={30} color={theme.colors.tertiary} />
      </View>
      <View style={{alignItems:'center'}}>

      <CustomTextInput placeholder={'Search doctor, drugs, articles...'} name={'search'} />
      </View>
      <View style={styles.categoryView}>
        <CustomCategories Text={'Doctor'} require={require('../assets/images/Doctor.png')} />
        <CustomCategories Text={'Pharmacy'} require={require('../assets/images/Pharmacy.png')} />
        <CustomCategories Text={'Hospital'} require={require('../assets/images/Hospital.png')} />
        <CustomCategories Text={'Ambulance'} require={require('../assets/images/Ambulance.png')} />
      </View>
      <View style={styles.boxView}>
        <View>
          <Text style={styles.txt}>Early protection for your family health</Text>
          <CustomButton Text={'Learn more'} color={theme.colors.secondry} colors={theme.colors.primary} />
        </View>
        {/* <View> */}
        <Image source={require('../assets/images/DCA.png')} />
        {/* </View> */}
      </View>
      <View style={[styles.headingview]}>
        <Text style={styles.lefthead}>Top Doctor</Text>
        <Text style={styles.righthead} onPress={openModal}>See all</Text>
        <DrListCumponent visible={modalVisible} closeModal={closeModal}
        // customData={[modalNameData, modalData]} 
        />
      </View>
      <FlatList
        data={Drdata}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.flatmain}>
              <Image source={item.Img} style={{ height: 100, width: 100, borderRadius: 50 }} />
              <Text style={styles.flathead1}>{item.heading1}</Text>
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
            </TouchableOpacity>
          )
        }}
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 32,
    color: theme.colors.tertiary,
    // marginHorizontal:10
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  txt: {
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25,
    marginHorizontal: 20,
    color: theme.colors.tertiary,
  },
  boxView: {
    backgroundColor: 'rgba(232, 243, 241, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20
  },
  flatmain: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: 'rgba(232, 243, 241, 1)',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    opacity: 9,
  },
  flathead1: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    // fontStyle: 'normal',
    fontWeight: '600',
    color: theme.colors.tertiary
  },
  flathead2: {
    color: 'rgba(173, 173, 173, 1)',

    fontFamily: theme.fonts.semiBold,
    fontSize: 11,
    fontWeight: '500',
  },
  headingview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
    flex: 1,
  },
  lefthead: {
    color: theme.colors.tertiary,
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    marginRight:20,
  },
  righthead: {
    color: theme.colors.secondry,

    // font-family: Inter;
  
    fontSize: 14,
    // font-style: normal;
    fontWeight: '400',
  },
  RLView: {
    flexDirection: 'row',
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
})
