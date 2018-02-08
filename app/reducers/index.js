'use strict';

import {combineReducers} from 'redux';
import auth from './authReducer'; // 导入登录的redux处理过程
import nav from './navReducer';
import sheet from './sheetReducer'; // 导入登录的redux处理过程
const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    nav,
    auth,
    sheet,
});

export default rootReducer; // 导出,作为统一入口
