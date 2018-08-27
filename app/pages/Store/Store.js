import React, {Component} from 'react'
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import {connect} from "react-redux"
import Realm from 'realm';

class Store extends Component<{}> {

    static navigationOptions = ({navigation}) => {

        return {
            headerLeft: <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DrawerOpen')
                }}
            >
                <Image
                    source={require('../../assets/Profile_tabBar_Select_Image.png')}
                    style={styles.person}
                />
            </TouchableOpacity>,
            headerTitle: '书城',
            headerRight: <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{padding: 10}}
                    onPress={() => {
                        navigation.navigate('Search')
                    }}>
                    <Ionicons name='ios-search'
                              size={25}
                              style={{color: '#FC0D1B'}}
                    />
                </TouchableOpacity>
            </View>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {realm: null};
    }

    componentWillMount() {
        Realm.open({
            schema: [{name: 'Dog', properties: {name: 'string'}}]
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', {name: 'Rex'});
            });
            this.setState({realm});
        });
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...';

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {info}
                </Text>
            </View>
        );
    }
}

export default connect()(Store)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
