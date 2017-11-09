import React from 'react';
import {DrawerItems} from 'react-navigation';
import {StyleSheet, View} from "react-native";

export default CustomDrawerContentComponent = (props) => (
    <View style={styles.container}>
        <DrawerItems {...props} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
