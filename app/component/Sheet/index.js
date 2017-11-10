import React, {Component} from 'react';
import {Button, Image, Platform, StyleSheet, Text, View} from 'react-native';
import TouchableItem from "react-navigation/src/views/TouchableItem";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
            headerTitle: <Button title="Info" onPress={() => {
            }}/>,
            headerRight: <Button title="Info" onPress={() => {
            }}/>,
        };
    };

    render() {
        const {goBack} = this.props.navigation;
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
                <Button
                    title="Go back"
                    onPress={() => goBack()}
                />
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
    person: {
        marginLeft: 10,
    },
});
