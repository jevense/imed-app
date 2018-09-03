import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View,} from 'react-native';

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');


export default class otherpage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>TEST</Text>
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
