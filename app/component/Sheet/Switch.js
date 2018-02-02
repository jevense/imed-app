import React from 'react'
import {TabNavigator} from 'react-navigation'
import LocalSheet from './LocalSheet'
import StoreSheet from './StoreSheet'

export default TabNavigator(
    {
        Sheet: {
            screen: LocalSheet,

        },
        Store: {
            screen: StoreSheet,
        }
    },
    {
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
    }
);

