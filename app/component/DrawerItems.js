import React from 'react';
import ReactNavigation from 'react-navigation';
import {Text} from "react-native";


export default class DrawerItems extends ReactNavigation.DrawerItems {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>测试</Text>
        );
    }
}