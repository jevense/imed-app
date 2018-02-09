// 初始状态
const initialState = {
    modalVisible: false,
};

// 不同类别的事件使用switch对应处理过程
export default function reader(state = initialState, action) {

    switch (action.type) {
        case 'changeVisible':
            return {
                ...state,
                modalVisible: action.modalVisible,
            };
        default:
            return state;

    }
}
