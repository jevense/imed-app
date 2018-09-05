import {Dimensions} from "react-native";

let {height, width} = Dimensions.get('window');
const numColumns = 3;
let dataSource = [];

const initialState = {
    dataSource,
    isList: false,
    numColumns,
    columnType: {numColumns},
    itemWidth: (width) / numColumns,
    searchVisible: false,
    cartVisible: false,
    cart: {
        "datas": [
            {
                "name": "小米 红米Note5A 全网通版 3GB+32GB 香槟金",
                "description": "1600万像素柔光自拍，5.5”高清大屏，轻薄机身好手感！",
                "money": 120,
                "status": false,
                "img": "https://img14.360buyimg.com/n7/jfs/t3151/314/5710217395/97069/4a6f06ef/5881a134Nb7bd8f57.jpg",
                "count": 1
            },
            {
                "name": "水星（MERCURY）薄荷路由D12 1200M双频千兆",
                "description": "水星新一代轻彩设计，双频千兆无线2017清新来袭",
                "money": 801,
                "status": false,
                "img": "https://img10.360buyimg.com/n7/jfs/t4063/153/323373745/444727/87c24f22/58b11156N9be178c2.jpg",
                "count": 1
            },
            {
                "name": "小天鹅(LittleSwan)全自动滚筒洗衣机",
                "description": "【新品预售】预付100元抵900！抢鲜价2998元！8公斤洗烘一体滚筒！下单再抢大额红包！",
                "money": 229,
                "status": false,
                "img": "https://img10.360buyimg.com/n7/jfs/t4063/153/323373745/444727/87c24f22/58b11156N9be178c2.jpg",
                "count": 1
            },
            {
                "name": "中柏（Jumper）EZpad 6Plus 128G版",
                "description": "新品上市！11.6英寸Apollo N3450 6G+128G 领券下单立减100，前200名晒单享大礼包！",
                "money": 681,
                "status": false,
                "img": "https://img10.360buyimg.com/n7/jfs/t4063/153/323373745/444727/87c24f22/58b11156N9be178c2.jpg",
                "count": 1
            },
            {
                "name": "荣耀 畅玩6 2GB+16GB 金色 全网通4G手机 双卡",
                "description": "柔光自拍，舒适握感，长续航！",
                "money": 178,
                "status": false,
                "img": "https://img10.360buyimg.com/n7/jfs/t4063/153/323373745/444727/87c24f22/58b11156N9be178c2.jpg",
                "count": 1
            },
            {
                "name": "魅族 PRO 7 4GB+128GB 全网通公开版 香槟金",
                "description": "购买享6期免息，双摄如瞳，明眸善睐！创新画屏，妙不可言！",
                "money": 111,
                "status": false,
                "img": "https://img10.360buyimg.com/n7/jfs/t4063/153/323373745/444727/87c24f22/58b11156N9be178c2.jpg",
                "count": 1
            }
        ],
        "allSelected": false,
        "totalMoney": 0
    }
};


// 不同类别的事件使用switch对应处理过程
export default function sheetReducer(state = initialState, action) {
    let cart = {...state.cart}
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
        case 'openSearch':
            return {
                ...state,
                searchVisible: true
            };
        case 'closeSearch':
            return {
                ...state,
                searchVisible: false
            };
        case 'openCart':
            return {
                ...state,
                cartVisible: true
            };
        case 'closeCart':
            return {
                ...state,
                cartVisible: false
            };
        case 'toggleCheck':
            let cartIndex = cart.datas[action.index]
            cartIndex.status = !cartIndex.status

            cart.allSelected = cart.datas.findIndex(item => !item['status']) < 0
            cart.totalMoney = cart.datas.filter(item => item['status']).map(item => item.money).reduce((previous, current) => current + previous, 0)
            return {
                ...state,
                cart,
            };
        case 'toggleSelectAll':
            cart.allSelected = !cart.allSelected
            cart.datas.forEach((item) => {
                item.status = cart.allSelected
            })
            cart.totalMoney = cart.datas.filter(item => item['status']).map(item => item.money).reduce((previous, current) => current + previous, 0)
            return {
                ...state,
                cart,
            };
        case 'deleteCart':
            cart.datas = cart.datas.filter(item => !item['status'])
            cart.totalMoney = 0
            return {
                ...state,
                cart,
            };
        default:
            return state;

    }
}
