import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Switch from './Switch'
import Person from '../Person';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Sheet extends Component<{}> {

    static navigationOptions = ({navigation}) => {

        return {
            headerLeft: <TouchableItem
                onPress={() => {
                    navigation.navigate('Person')
                }}
            >
                <Image
                    source={require('../../assets/Profile_tabBar_Select_Image.png')}
                    style={styles.person}
                />
            </TouchableItem>,
            headerTitle: <TextInput placeholder='搜索图书' returnKeyType='search'/>,
            headerRight: <View style={styles.headerTitle}>
                <TouchableItem
                    onPress={() => {

                    }}>
                    <Ionicons name='ios-search' size={25}/>
                </TouchableItem>
                <TouchableItem
                    style={{marginLeft: 20}}
                    onPress={() => {
                        // params.switch._navigation.navigate('Sheet');
                        // setParams({selected: 'Sheet'});
                        // navigation.navigate('Sheet')
                    }}>
                    <Ionicons name='ios-add-outline' size={25}/>
                </TouchableItem>
            </View>,
        };
    };

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Switch
                ref={(ref) => this._switch = ref}
                style={styles.container}
            />
        );
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

