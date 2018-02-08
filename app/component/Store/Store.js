import React, {Component} from 'react'
import {Button, StyleSheet} from 'react-native'
import {connect} from "react-redux";


class Store extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => ({
        headerTitle: '书城',
    });

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="书城"
            />
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
