import React from 'react'
import {Image} from 'react-native'
import {TabBarBottom, TabNavigator} from 'react-navigation'
import Home from "./StackNavigator"
import Store from '../pages/Store/index'
import Database from '../pages/Database/index'
import Exam from '../pages/Exam/index'
import Course from '../pages/Course/index'

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
            screen: Store,
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
            screen: Database,
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
            screen: Exam,
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
            screen: Course,
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
