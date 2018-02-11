import {NavigationActions} from "react-navigation";

export const changeModalVisible = (value) => {
    return (dispatch) => {
        dispatch({type: 'changeVisible', modalVisible: value})
    }
};


export const goBack = () => {
    return (dispatch) => {
        dispatch({type: 'changeVisible', modalVisible: false});
        dispatch(NavigationActions.navigate({routeName: 'Sheet'}))
    }
};


export const openReader = () => {
    return (dispatch) => {
        dispatch({type: 'openReader'});
    }
};


export const closeReader = () => {
    return (dispatch) => {
        dispatch({type: 'closeReader'});
    }
};
