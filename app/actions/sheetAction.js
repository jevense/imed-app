import {NavigationActions} from "react-navigation";
import {storage} from "../storage"
import {bookList, chapterList} from '../storage/mongodb'

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
        } else if ('clear' === value) {
            storage.remove({key: 'books'});
            console.log('=====')
            bookList.remove({}, {multi: true}, function (err, numRemoved) {
            });
            chapterList.remove({}, {multi: true}, function (err, numRemoved) {
            });
        }
    }
};

export const openSearch = () => {
    return (dispatch) => {
        dispatch({type: 'openSearch'})
    }
}

export const openCart = () => {
    return (dispatch) => {
        dispatch({type: 'openCart'})
    }
}

export const closeSearch = () => {
    return (dispatch) => {
        dispatch({type: 'closeSearch'})
    }
}

export const closeCart = () => {
    return (dispatch) => {
        dispatch({type: 'closeCart'})
    }
}

export const toggleCheck = (index) => {
    return (dispatch) => {
        dispatch({type: 'toggleCheck', index})
    }
}

export const toggleSelectAll = () => {
    return (dispatch) => {
        dispatch({type: 'toggleSelectAll'})
    }
}

export const deleteCart = () => {
    return (dispatch) => {
        dispatch({type: 'deleteCart'})
    }
}
