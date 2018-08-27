import React, {Component} from 'react'
import {Button, StyleSheet} from 'react-native'
import {connect} from "react-redux"
import Person from "../Person/Person"


class Course extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => ({
        headerTitle: '我的',
    });

    render() {
        return (
            <Person {...this.props}/>
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
