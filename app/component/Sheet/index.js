import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "../Search";
import LocalSheet from "./GridSheet";
import TopNavigation from "../Menu";


export default class Sheet extends Component<{}> {

    static navigationOptions = ({navigation}) => {

        return {
            headerLeft: <TouchableItem
                onPress={() => {
                    navigation.navigate('DrawerOpen')
                }}
            >
                <Image
                    source={require('../../assets/Profile_tabBar_Select_Image.png')}
                    style={styles.person}
                />
            </TouchableItem>,
            headerTitle: '书架',
            headerRight: <View style={{flexDirection: 'row'}}>
                <TouchableItem
                    style={{padding: 10}}
                    onPress={() => {
                        navigation.navigate('Search')
                    }}>
                    <Ionicons name='ios-search'
                              size={25}
                              style={{color: '#FC0D1B'}}
                    />
                </TouchableItem>
                <TopNavigation style={{padding: 10}}/>
            </View>,
        };
    };

    render() {
        const {goBack} = this.props.navigation;
        return (
            <LocalSheet dataSource={this.getDataList()} style={styles.container}/>
        );
    }

    getDataList() {
        return [
            {
                key: 1,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 2,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 3,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 4,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 5,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 6,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 7,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 8,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 9,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 10,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 11,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
            {
                key: 12,
                title: '中国毕业后医学教育（2017-2期刊）',
                editor: '张雁灵',
                size: '10M',
                image: require('../../assets/cover/maga-cover.jpg')
            },
        ]
    }
}


const
    styles = StyleSheet.create({
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
        person: {
            marginLeft: 10,
            marginRight: 10,
        },
        headerTitle: {
            flexDirection: 'row',
        },
        button: {
            height: 30,
            width: 80,
            borderWidth: 1,
            borderColor: 'red',
            justifyContent: 'center',
        },
        buttonLeft: {
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
        },
        buttonRight: {
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
        },
        buttonText: {
            textAlign: 'center',
        },
    });

const
    selectedStyles = StyleSheet.create({
        button: {
            backgroundColor: 'red',
        },
        buttonText: {
            color: 'white',
            fontWeight: '900',
        },
    });

const
    unSelectedStyles = StyleSheet.create({
        button: {
            backgroundColor: 'white',
        },
        buttonText: {
            color: 'red',
        },
    });

