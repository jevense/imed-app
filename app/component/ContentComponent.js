import React from 'react';
import {DrawerItems} from 'react-navigation';
import {StyleSheet, Text, View} from "react-native";
import Person from "./Person";

export default ContentComponent = (props) => {
    console.log(props);
    return (
        <Person {...props}/>
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
    footer: {
        position: 'absolute',
        bottom: 0,
    }
});
