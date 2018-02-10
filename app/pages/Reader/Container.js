import React, {Component} from "react";
import {
    ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
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
                <Menu {...{drawer, modalVisible, changeModalVisible, navigation,}}/>
                <TouchableOpacity onPress={() => changeModalVisible(true)}>
                    <ScrollView>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                        <Text style={{ height: 100}}>Show Modal</Text>
                    </ScrollView>
                </TouchableOpacity>
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
