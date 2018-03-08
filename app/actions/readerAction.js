import {NavigationActions} from "react-navigation";
import {storage} from "../storage";

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


export const openReader = (bookId) => {
    return (dispatch) => {
        storage.load({
            key: 'chapter',
            id: bookId,
        }).then(dataSource => {
            dispatch({type: 'openReader', bookId: bookId, chapter: dataSource});
        }).catch(err => {
            console.log(err)
        });
    }
};


export const closeReader = () => {
    return (dispatch) => {
        dispatch({type: 'closeReader'});
    }
};
