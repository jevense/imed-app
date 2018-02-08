import React, {Component} from 'react'
import {Button, StyleSheet} from 'react-native'
import {connect} from "react-redux";


class Database extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => ({
        headerTitle: '数据库',
    });

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="数据库"
            />
        );
    }
}

export default connect()(Database)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
