import {AppNavigator} from '../container/App'
import {NavigationActions} from 'react-navigation';

// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const tempNavState = AppNavigator.router.getStateForAction(secondAction);
// const initialState = AppNavigator.router.getStateForAction(
//     secondAction,
//     tempNavState
// );

// const initAction = NavigationActions.init();
// const initAction = NavigationActions.navigate({routeName: 'Login',});

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

function navReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default navReducer
