import {NavigationActions} from "react-navigation";

export const view = (value) => {
    console.log(value);
    return (dispatch) => {
        if ('grid' === value || 'list' === value) {
            dispatch({type: value})
        } else if ('bookAdd' === value) {
            dispatch(NavigationActions.navigate({routeName: 'BookAdd'}))
        }
    }
};
