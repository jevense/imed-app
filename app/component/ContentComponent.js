import React from 'react';
import {DrawerItems} from 'react-navigation';
import {StyleSheet, Text, View} from "react-native";
// import DrawerItems from "./DrawerItems";

export default ContentComponent = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>欢迎</Text>
            </View>
            <DrawerItems {...props} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 50,
        height: 200,
        width: '100%'
    },
    welcome: {
        fontSize: 20,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});