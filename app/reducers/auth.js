import  {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR}  from '../constants/loginTypes'; // 导入事件类别,用来做事件类别的判断
// 初始状态
const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null,
};

// 不同类别的事件使用switch对应处理过程
export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在登陆',
                isSuccess: false,
                user: null,
            };
        case LOGIN_IN_DONE:
            return {
                ...state,
                status: '登陆成功',
                isSuccess: true,
                user: action.user,
            };

        case LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录出错',
                isSuccess: false,
                user: null,
            };
        default:
            return state;

    }
}
