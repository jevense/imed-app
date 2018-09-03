import React, {Component} from 'react';
import {Dimensions, StyleSheet, View,} from 'react-native';
import SideMenu from './BaseSideMenu'

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');


export default class WellChosen extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                <SideMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
