import {NavigationActions} from 'react-navigation'
import {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR} from '../constants/loginTypes'; // 导入事件类型,用来做分配给各个事件

// 模拟用户信息
let user = {
    name: 'zhangsan',
    age: 24,
};

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export const login = () => {
    console.log('登录方法');
    return (dispatch) => {
        dispatch(isLogining()); // 正在执行登录请求
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/').then((res) => {
            dispatch(loginSuccess(true, user)); // 登录请求完成
            dispatch(NavigationActions.navigate({routeName: 'Main'}))
        }).catch((e) => {
            dispatch(loginError(false)); // 登录请求出错
            dispatch(NavigationActions.navigate({routeName: 'Login'}))
        });
        // return getMoviesFromApi()
    }
};

async function getMoviesFromApi() {
    try {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}

export const preLogin = () => {
    return (dispatch) => {
        dispatch(NavigationActions.navigate({routeName: 'Login'}));
    }
};

function isLogining() {
    return {
        type: LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: LOGIN_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: LOGIN_IN_ERROR,
    }
}
