import React from 'react';
import {DrawerItems} from 'react-navigation';
import {ScrollView, StyleSheet} from "react-native";
// import DrawerItems from "./DrawerItems";

export default ContentComponent = (props) => {
    console.log(props)
    return (
        <DrawerItems {...props} />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
