import React from 'react';
import {addNavigationHelpers, StackNavigator,} from 'react-navigation';
import {connect} from 'react-redux';
import LoginPage from '../pages/LoginPage'
import MainPage from './MainPage'
import {addListener} from '../store/ConfigureStore';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginPage,
        path: 'login'
    },
    Main: {screen: MainPage},
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
