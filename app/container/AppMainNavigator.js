import React from 'react';
import {addNavigationHelpers, StackNavigator,} from 'react-navigation';
import {connect} from 'react-redux';
import LoginPage from '../pages/LoginPage'
import DrawerNavigator from './DrawerNavigator'
import {addListener} from '../store/ConfigureStore';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginPage,
        path: 'login'
    },
    Main: {
        screen: DrawerNavigator,
    },
}, {
    headerMode: 'none',
    initialRouteName: 'Main',
});

class App extends React.Component {
    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: nav,
                addListener,
            })}/>
        );
    }
}

export default connect(state => ({
    nav: state.nav
}))(App);
