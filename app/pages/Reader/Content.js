import React, {Component} from "react";
import {Modal, StatusBar, Text, TouchableHighlight, View} from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        return (
            <View>
                <StatusBar hidden/>
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
                <TouchableHighlight onPress={() => changeModalVisible(true)}>
                    <View>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                        <Text style={{backgroundColor: 'red', height: 100}}>Show Modal</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        modalVisible: state.reader.modalVisible
    }),
    (dispatch) => ({
        changeModalVisible: (value) => dispatch(changeModalVisible(value)),
    })
)(Content)
