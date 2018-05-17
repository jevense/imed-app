import {Dimensions} from "react-native";

let {height, width} = Dimensions.get('window');
const numColumns = 3;
let dataSource = [];

const initialState = {dataSource, isList: false, numColumns, columnType: {numColumns}, itemWidth: (width) / numColumns};


// 不同类别的事件使用switch对应处理过程
export default function sheetReducer(state = initialState, action) {
    switch (action.type) {
        case 'init':
            return {
                ...state,
                dataSource: action.dataSource,
            };
        case 'grid':
            return {
                ...state,
                isList: false,
                columnType: {numColumns: state.numColumns},
                itemWidth: (width) / numColumns
            };
        case 'list':
            return {
                ...state,
                isList: true,
                columnType: {}
            };
        default:
            return state;

    }
}
