'use strict';

import {combineReducers} from 'redux';
import auth from './authReducer'; //
import nav from './navReducer';
import sheet from './sheetReducer'; //
import reader from './readerReducer'; //
import store from './storeReducer'; //
const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    nav,
    auth,
    sheet,
    reader,
    store,
});

export default rootReducer; // 导出,作为统一入口
