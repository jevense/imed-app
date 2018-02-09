import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import Realm from 'realm';

class Store extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => ({
        headerTitle: '书城',
    });

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
