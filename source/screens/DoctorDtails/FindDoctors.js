import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../../utils/styles'
import CustomCategories from '../../components/CustomCategories'
import CustomTextInput from '../../components/CustomTextInput'

const FindDoctors = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Entypo
                        name={'chevron-thin-left'} size={20}
                        color={theme.colors.tertiary}
                        onPress={()=>navigation.navigate('home')}
                        />
                        <Text>Find Doctors</Text>
                        <CustomTextInput name={'search'} placeholder={'Find a doctor'}/>
                    <Text>Category</Text>
                    <View style={styles.categoryView}>
        <CustomCategories Text={'General'} require={require('../../assets/images/Doctor.png')} />
        <CustomCategories Text={'Lungs'} require={require('../../assets/images/Lungs.png')} />
        <CustomCategories Text={'Dentist'} require={require('../../assets/images/Dentist.png')} />
        <CustomCategories Text={'Psychiatrist'} require={require('../../assets/images/Psychiatrist.png')} />
        <CustomCategories Text={'Covid-19'} require={require('../../assets/images/Covid.png')} />
        <CustomCategories Text={'Surgeon'} require={require('../../assets/images/Syringe.png')} />
        <CustomCategories Text={'Cardiologist'} require={require('../../assets/images/Cardiologist.png')} />
      </View>
      <Text>FindDoctors</Text>
    </View>
  )
}

export default FindDoctors

const styles = StyleSheet.create({
    categoryView: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // padding: 5,
        flexWrap:'wrap',
        flexShrink:1
      },
})