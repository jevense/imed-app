import React, {Component} from 'react';
import {Dimensions, StyleSheet, View,} from 'react-native';
import SwiperItem from "../Sheet/SwiperItem"

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');


export default class WellChosen extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/*<SwiperItem/>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
