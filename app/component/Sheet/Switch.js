import React from 'react'
import {TabNavigator} from 'react-navigation'
import LocalSheet from './LocalSheet'
import StoreSheet from './StoreSheet'
import {Button, Text, View} from "react-native";

const HomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
    </View>
);

// export default TabNavigator(
//     {
//         Sheet: {
//             screen: LocalSheet,
//
//         },
//         Store: {
//             screen: StoreSheet,
//         }
//     },
//     {
//         swipeEnabled: true,
//         animationEnabled: false,
//         lazy: true,
//     }
// );

export default HomeScreen

