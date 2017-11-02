import React from 'react'
import {TabBarBottom, TabNavigator} from 'react-navigation';
import Sheet from "./app/component/Sheet";
import ProfileScreen from "./app/component/Sheet/ProfileScreen";
import TabBarItem from "./app/TabBarItem";

export default TabNavigator(
    {
        Sheet: {
            screen: Sheet,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书架',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        // normalImage={import('./imgs/nav_fav@2x.png')}
                        // selectedImage={import('./imgs/nav_fav_actived@3x.png')}
                    />
                )
            }),
        },
        Store: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书城',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        // normalImage={require('./imgs/tab_me_nor@3x.png')}
                        // selectedImage={require('./imgs/tab_me_selected@2x.png')}

                    />
                )
            }),
        },
        Database: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '数据库',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        // normalImage={require('./imgs/tab_me_nor@3x.png')}
                        // selectedImage={require('./imgs/tab_me_selected@2x.png')}

                    />
                )
            }),
        },
        Exam: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '考试',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        // normalImage={require('./imgs/tab_me_nor@3x.png')}
                        // selectedImage={require('./imgs/tab_me_selected@2x.png')}

                    />
                )
            }),
        },
        Course: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '教程',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        // normalImage={require('./imgs/tab_me_nor@3x.png')}
                        // selectedImage={require('./imgs/tab_me_selected@2x.png')}

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
            activeTintColor: '#06c1ae',
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff',},
            labelStyle: {
                fontSize: 15, // 文字大小
            },
        }

    }
);