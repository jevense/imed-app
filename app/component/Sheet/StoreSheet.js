import React from 'react'
import {Button} from 'react-native';

export default class StoreSheet extends React.Component {

    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Seceond"
            />
        );
    }
}

const drawerStyles = {
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
};
