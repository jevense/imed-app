import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import {createReactNavigationReduxMiddleware, createReduxBoundAddListener} from "react-navigation-redux-helpers"


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");


const createStoreWithMiddleware = applyMiddleware(middleware, thunkMiddleware)(createStore);
export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}


