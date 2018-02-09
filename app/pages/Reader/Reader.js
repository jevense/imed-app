import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {connect} from "react-redux";
import DrawerComponent from './DrawerComponent'


class Reader extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => {
        navigationOptions.tabBarVisible = false;
        return ({header: null,})
    };

    render() {
        let {navigation} = this.props;
        return (
            <DrawerComponent navigation={navigation}/>
        );
    }
}

export default connect()(Reader)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
