import {NavigationActions} from "react-navigation"
import {SectionLocation, storage} from "../storage"

export const changeModalVisible = (value) => {
    return (dispatch) => {
        dispatch({type: 'changeVisible', modalVisible: value})
    }
};


export const goBack = () => {
    return (dispatch) => {
        dispatch({type: 'changeVisible', modalVisible: false})
        dispatch(NavigationActions.navigate({routeName: 'Sheet'}))
    }
};

export const fillData = (sectionId, bookId) => {
    return (dispatch) => {

    }
};

export const openReader = (bookId) => {
    return (dispatch) => {
        storage.load({
            key: 'chapter',
            id: bookId,
        }).then(chapterDataSource => {
            SectionLocation.get(bookId).then(sectionId => {
                dispatch({
                    type: 'openReader',
                    bookId: bookId,
                    chapter: chapterDataSource,
                    sectionId: sectionId,
                })
                storage.load({
                    key: 'section',
                    id: sectionId,
                    syncParams: {bookId,},
                }).then(dataSource => {
                    dispatch({
                        type: 'fillData',
                        dataSource: dataSource,
                    })
                });
            })
        }).catch(err => {
            console.log(err)
        });
    }
};

export const changeSection = (value) => {
    return (dispatch) => {
        dispatch({type: 'changeSection', sectionId: value})
    }
};


export const closeReader = () => {
    return (dispatch) => {
        dispatch({type: 'closeReader'});
    }
};
