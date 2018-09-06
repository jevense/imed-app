import {toggleView} from "../actions/storeAction"

const initialState = {
    isList: true,
};


// 不同类别的事件使用switch对应处理过程
export default function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'toggleView':
            return {
                ...state,
                isList: !state.isList,
            };
        default:
            return state;

    }
}
