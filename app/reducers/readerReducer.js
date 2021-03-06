// 初始状态
const initialState = {
    modalVisible: false,
    readerOpened: false,
    bookId: 1,
    chapter: {
        chapterData: [],
        bookName: '',
    },
    sectionId: 1,
};

// 不同类别的事件使用switch对应处理过程
export default function reader(state = initialState, action) {
    switch (action.type) {
        case 'changeVisible':
            return {
                ...state,
                modalVisible: action.modalVisible,
            };
        case 'openReader':
            return {
                ...state,
                bookId: action.bookId,
                chapter: action.chapter,
                sectionId: action.sectionId,
                readerOpened: true,
            };
        case 'fillData':
            return {
                ...state,
                dataSource: action.dataSource,
            };
        case 'changeSection':
            return {
                ...state,
                sectionId: action.sectionId,
            };
        case 'closeReader':
            return {
                ...state,
                readerOpened: false,
                modalVisible: false,
            };
        default:
            return state;

    }
}
