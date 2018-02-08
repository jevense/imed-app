import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import {SafeAreaView, TabBarBottom, TabBarTop, TabNavigator} from 'react-navigation'

const Sheet1 = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
    </View>
);

const Sheet2 = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
    </View>
);

export default TabNavigator(
    {
        Sheet1: {
            screen: Sheet1,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书架',
            }),
        },
        Store2: {
            screen: Sheet2,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书城',
            }),
        },
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            headerStyle: {
                elevation: 0,
            },
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            indicatorStyle: {
                backgroundColor: 'red',
            },
            style: {
                backgroundColor: '#F7F7F7',
            },
        }
    }
);
