import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {SearchBar} from 'react-native-elements'
import Ionicons from "react-native-vector-icons/Ionicons";
import Scanner from "./BarcodeScanner";
import TabSwitch from "./TabSwitch";


class Sheet extends Component<{}> {

    static navigationOptions = ({navigation}) => {

        return {
            headerLeft: <TouchableOpacity onPress={() => {
                navigation.navigate('Scanner')
            }}>
                <Ionicons name='ios-qr-scanner'
                          size={25}
                          style={{color: '#FC0D1B', marginHorizontal: 10}}
                />
            </TouchableOpacity>,
            headerTitle: (<SearchBar
                round
                lightTheme
                containerStyle={{backgroundColor: '#F7F7F7', borderTopWidth: 0, borderBottomWidth: 0}}
                inputStyle={{margin: 0, backgroundColor: '#E9E9EF', width: 250}}
                icon={{type: 'ionicon', name: 'ios-search', style: {top: 7.5, left: 10}}}
                placeholder='请输入搜索关键词'
                // placeholderTextColor={'#E9E9EF'}
            />),
            headerRight: (<Button
                style={{marginRight: 5}}
                color='#FC0D1B'
                title={'取消'}
                onPress={() => {
                    navigation.goBack()
                }}
            />),
        };
    };

    render() {
        return (
            <TabSwitch/>
        )
    }
}

export default connect(
    (state) => ({
        isList: state.sheet.isList,
        dataSource: state.sheet.dataSource,
        columnType: state.sheet.columnType,
        itemWidth: state.sheet.itemWidth,
    })
)(Sheet)

const styles = StyleSheet.create({
    btnDefaultStyle: {}
});
