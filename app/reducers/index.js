'use strict';

import {combineReducers} from 'redux';
import auth from './auth'; // 导入登录的redux处理过程
import nav from './navReducer'; // 导入登录的redux处理过程
const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    nav,
    auth,
});

export default rootReducer; // 导出,作为统一入口
