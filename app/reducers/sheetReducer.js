import {Dimensions} from "react-native";

let {height, width} = Dimensions.get('window');
const numColumns = 3;

let dataSource = [
    {
        key: 1,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 2,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 3,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 4,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 5,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 6,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 7,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 8,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 9,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 10,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 11,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
    {
        key: 12,
        title: '中国毕业后医学教育（2017-2期刊）',
        editor: '张雁灵',
        size: '10M',
        image: require('../assets/cover/maga-cover.jpg')
    },
];

const initialState = {dataSource, isList: false, numColumns, columnType: {numColumns}, itemWidth: (width) / numColumns};

// 不同类别的事件使用switch对应处理过程
export default function sheetReducer(state = initialState, action) {
    switch (action.type) {
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
