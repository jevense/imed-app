export const view = (value) => {
    console.log(value);
    return (dispatch) => {
        if ('grid' === value || 'list' === value) {
            dispatch({type: value})
        }
    }
};
