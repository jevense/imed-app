// import React from 'react'
// import {TabBarBottom, TabNavigator} from 'react-navigation'
// import Sheet from "./app/component/Sheet"
// import {Image} from 'react-native'
// import DrawerNavigator from "./app/component/DrawerNavigator";
//
// export default TabNavigator(
//     {
//         Sheet: {
//             screen: DrawerNavigator,
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '书架',
//                 tabBarIcon: ({focused, tintColor}) => (
//                     <Image source={require('./app/assets/BookShelf_tabBar_Normal_Image.png')}
//                            style={{tintColor: tintColor}}
//                     />
//                 )
//             }),
//         },
//         Store: {
//             screen: Sheet,
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '书城',
//                 tabBarIcon: ({focused, tintColor}) => (
//                     <Image source={require('./app/assets/BookStore_tabBar_Normal_Image.png')}
//                            style={{tintColor: tintColor}}
//                     />
//                 )
//             }),
//         },
//         Database: {
//             screen: Sheet,
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '数据库',
//                 tabBarIcon: ({focused, tintColor}) => (
//                     <Image source={require('./app/assets/DataBase_tabBar_Normal_Image.png')}
//                            style={{tintColor: tintColor}}
//                     />
//                 )
//             }),
//         },
//         Exam: {
//             screen: Sheet,
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '考试',
//                 tabBarIcon: ({focused, tintColor}) => (
//                     <Image source={require('./app/assets/ExamSystem_tabBar_Normal_Image.png')}
//                            style={{tintColor: tintColor}}
//                     />
//                 )
//             }),
//         },
//         Course: {
//             screen: Sheet,
//             navigationOptions: ({navigation}) => ({
//                 tabBarLabel: '教程',
//                 tabBarIcon: ({focused, tintColor}) => (
//                     <Image source={require('./app/assets/Surgery_tabBar_Normal_Image.png')}
//                            style={{tintColor: tintColor}}
//                     />
//                 )
//             }),
//         },
//     },
//     {
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         animationEnabled: false,
//         lazy: true,
//         tabBarOptions: {
//             activeTintColor: 'red',
//             inactiveTintColor: 'gray',
//             labelStyle: {
//                 fontSize: 12, // 文字大小
//             },
//         }
//     }
// );

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
