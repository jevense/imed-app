import React from 'react'
import {StackNavigator} from "react-navigation"
import Database from './Database';

export default StackNavigator({
    Database: {
        screen: Database,
    },
}, {
    initialRouteName: 'Database',
});

