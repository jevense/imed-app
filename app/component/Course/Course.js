import React, {Component} from 'react'
import {Button, StyleSheet} from 'react-native'
import {connect} from "react-redux";


class Course extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => ({
        headerTitle: '教程',
    });

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="教程"
            />
        );
    }
}

export default connect()(Course)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
