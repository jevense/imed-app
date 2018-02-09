import {Modal, TouchableHighlight, View} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

export const Menu = ({drawer, changeModalVisible}) => (
    <Modal
        animationType={"fade"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            // alert("Modal has been closed.")
        }}
    >
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Header navigation={navigation}/>
            <TouchableHighlight
                style={{flex: 20}}
                onPress={() => changeModalVisible(false)}>
                <View style={{flex: 1}}/>
            </TouchableHighlight>
            <Footer navigation={navigation}
                    drawer={drawer}
            />
        </View>
    </Modal>
);
