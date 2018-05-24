import React from "react"
import {Modal, TouchableHighlight, View} from "react-native"
import Header from "./Header"
import Footer from "./Footer"

export const Menu = ({drawer, modalVisible, changeModalVisible, navigation}) => (
    <Modal
        animationType={"fade"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            // alert("Modal has been closed.")
        }}
    >
        <Header {...{navigation,}}/>
        <TouchableHighlight
            style={{flex: 1}}
            onPress={() => changeModalVisible(false)}>
            <View/>
        </TouchableHighlight>
        <Footer {...{navigation, drawer}}/>
    </Modal>
);
