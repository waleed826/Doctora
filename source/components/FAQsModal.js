import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../utils/styles';
import WebView from 'react-native-webview';
import { UIActivityIndicator } from 'react-native-indicators';

const FAQsModal = ({ customData, visible, closeModal }) => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);

    return (
        <Modal isVisible={visible} animationType="slide" coverScreen={true} backdropOpacity={0.4} hasBackdrop={true} onBackdropPress={closeModal} >
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                {loading ?
                    <UIActivityIndicator color={theme.colors.secondry} />
                    :
                    <>
                        <Feather name={'chevrons-down'} size={25} style={{ alignSelf: 'center' }} onPress={closeModal} />
                        <WebView onLoadEnd={() => { setLoading(false) }} source={{ uri: 'https://doctoraappfaqs.blogspot.com/' }} style={{}} />
                    </>
                }
            </View>

        </Modal>
    )
}

export default FAQsModal

const styles = StyleSheet.create({
    question: {
        fontFamily: theme.fonts.bold,

    }
})











