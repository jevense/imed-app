import React from 'react'
import {StackNavigator} from "react-navigation"
import Store from './Store';

export default StackNavigator({
    Store: {
        screen: Store,
    },
}, {
    initialRouteName: 'Store',
});

