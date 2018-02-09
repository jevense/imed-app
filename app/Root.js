import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import {Platform} from 'react-native';


import App from './container/AppMainNavigator';
import {MenuContext} from "react-native-menu";
// app的入口
const store = configureStore();


const prefix = Platform.select({
    ios: 'imed://',
    android: 'imed://imed/'
})


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <MenuContext style={{flex: 1}}>
                    <App uriPrefix={prefix}/>
                </MenuContext>
            </Provider>
        )
    }
}
