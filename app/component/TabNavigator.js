import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import {SafeAreaView, TabBarBottom, TabNavigator} from 'react-navigation'
import Home from "./Home"

const Sheet = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
    </View>
);

export default TabNavigator(
    {
        Sheet: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书架',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('../assets/BookShelf_tabBar_Normal_Image.png')}
                           style={{tintColor: tintColor}}
                    />
                )
            }),
        },
        Store: {
            screen: Sheet,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书城',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('../assets/BookStore_tabBar_Normal_Image.png')}
                           style={{tintColor: tintColor}}
                    />
                )
            }),
        },
        Database: {
            screen: Sheet,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '数据库',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('../assets/DataBase_tabBar_Normal_Image.png')}
                           style={{tintColor: tintColor}}
                    />
                )
            }),
        },
        Exam: {
            screen: Sheet,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '考试',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('../assets/ExamSystem_tabBar_Normal_Image.png')}
                           style={{tintColor: tintColor}}
                    />
                )
            }),
        },
        Course: {
            screen: Sheet,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '教程',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('../assets/Surgery_tabBar_Normal_Image.png')}
                           style={{tintColor: tintColor}}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        }
    }
);
