import React from 'react'
import {TabBarBottom, TabNavigator} from 'react-navigation'
import Sheet from "./app/component/Sheet"
import {Image} from 'react-native'
import DrawerNavigator from "./app/component/DrawerNavigator";

export default TabNavigator(
    {
        Sheet: {
            screen: DrawerNavigator,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书架',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={require('./app/assets/BookShelf_tabBar_Normal_Image.png')}
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
                    <Image source={require('./app/assets/BookStore_tabBar_Normal_Image.png')}
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
                    <Image source={require('./app/assets/DataBase_tabBar_Normal_Image.png')}
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
                    <Image source={require('./app/assets/ExamSystem_tabBar_Normal_Image.png')}
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
                    <Image source={require('./app/assets/Surgery_tabBar_Normal_Image.png')}
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
