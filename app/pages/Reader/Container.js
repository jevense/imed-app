import React, {Component} from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";
import Header from "./Header";
import Footer from "./Footer";

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        return (
            <View>
                {/*<Menu {...{drawer, modalVisible, changeModalVisible, navigation,}}/>*/}
                <ScrollView>
                    <TouchableOpacity onPress={() => changeModalVisible(!modalVisible)}>
                        <View>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text selectable={true} style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                            <Text style={{height: 100}}>Show Modal</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                {
                    modalVisible && <Header {...{navigation,}}/>
                }
                {
                    modalVisible && <Footer {...{navigation, drawer,}}/>
                }
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
