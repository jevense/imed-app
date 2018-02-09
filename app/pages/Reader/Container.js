import React, {Component} from "react";
import {StatusBar, Text, TouchableHighlight, View} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";
import {Menu} from "./Menu";

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        return (
            <View>
                <StatusBar hidden/>
                <Menu drawer={drawer} changeModalVisible={changeModalVisible}/>
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
