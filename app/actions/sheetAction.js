import {NavigationActions} from "react-navigation";
import {storage} from "../storage"

export const init = () => {
    return (dispatch) => {
        storage.load({
            key: 'books',
        }).then(dataSource => {
            dispatch({
                type: 'init',
                dataSource: dataSource,
            })
        });
    }
};

export const view = (value) => {
    return (dispatch) => {
        if ('grid' === value || 'list' === value) {
            dispatch({type: value})
        } else if ('bookAdd' === value) {
            dispatch(NavigationActions.navigate({routeName: 'BookAdd'}))
        }
    }
};
