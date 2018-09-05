import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
// 引用头部组件
import CommonHead from './commonHead';
//引用插件
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import Recommend from './recommend';
import Otherpage from './otherpage';
import WellChose from './WellChosen';
import Search from "../Search"
import {connect} from "react-redux"
import {openCart, openSearch} from "../../actions/sheetAction"
import ActionSheet from "./ActionSheet"
import Chat from "./Chat"
import Cart from "./Cart"

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

class Store extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            tabShow: false,
            label: ['精选', '图书', '考试', '视频', '推荐'],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tabShow: true
            });
        }, 0)
    }

    // 头部左侧
    renderLeftItem() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Category')
            }} style={styles.navLeft}>
                <Ionicons name='ios-menu'
                          size={25}
                          sstyle={styles.navIcon}/>
                <Text style={styles.navText}>分类</Text>
            </TouchableOpacity>
        )
    }

    // 头部中间
    renderTitleItem(openSearch) {
        return (
            <TouchableOpacity onPress={openSearch}>
                <View style={styles.searchBox}>
                    <Image source={require('../../assets/img/search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchContent}>搜索图书</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 头部右侧
    renderRightItem(openCart) {
        return (
            <TouchableOpacity onPress={openCart} style={styles.navRight}>
                <Ionicons name='ios-cart-outline'
                          size={25}
                          sstyle={styles.navIcon}/>
                <Text style={styles.navText}>购物车</Text>
            </TouchableOpacity>
        )
    }

    // 滑动tab
    renderScrollableTab() {
        let label = this.state.label
        if (this.state.tabShow) {
            return (
                <View>
                    <Search/>
                    <Cart/>
                    <ScrollableTabView
                        style={{paddingTop: 8}}
                        renderTabBar={() =>
                            <ScrollableTabBar
                                style={{height: 35}}
                                tabStyle={{height: 34, paddingLeft: 15, paddingRight: 15,}}
                            />
                        }
                        tabBarBackgroundColor='#fff'
                        tabBarActiveTextColor='#F8343D'
                        tabBarInactiveTextColor='#333'
                        tabBarUnderlineStyle={styles.tabBarUnderline}
                    >
                        {
                            label.map((item, index) => {
                                if (item === '推荐') {
                                    return (
                                        <ScrollView tabLabel={item} key={index}>
                                            <Recommend/>
                                        </ScrollView>
                                    )
                                } else if (item === '精选') {
                                    return (
                                        <WellChose tabLabel={item} key={index}/>
                                    )
                                } else if (item === '图书') {
                                    return (
                                        <ActionSheet tabLabel={item} key={index}/>
                                    )
                                } else if (item === '考试') {
                                    return (
                                        <Text tabLabel={item} key={index}>
                                            考试
                                        </Text>
                                    )
                                } else if (item === '视频') {
                                    return (
                                        <Chat tabLabel={item} key={index}>
                                        </Chat>
                                    )
                                } else {
                                    return (
                                        <Otherpage tabLabel={item} key={index}/>
                                    )
                                }
                            })
                        }
                    </ScrollableTabView>
                </View>
            )
        }
    }

    render() {
        let {openSearch, openCart} = this.props
        return (
            <View style={styles.container}>
                <CommonHead
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem(openSearch)}
                    rightItem={() => this.renderRightItem(openCart)}
                />
                <View style={{flex: 1}}>
                    {this.renderScrollableTab()}
                </View>
            </View>
        );
    }
}

export default connect(
    (state) => ({
        // dataSource: state.sheet.dataSource,
    }),
    (dispatch) => ({
        openSearch: () => dispatch(openSearch()),
        openCart: () => dispatch(openCart()),
    })
)(Store)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    navLeft: {
        alignItems: 'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems: 'center',
        marginRight: 10,
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    navText: {
        fontSize: 10,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    searchContent: {
        color: '#666',
        fontSize: 14,
    },
    tabBarUnderline: {
        backgroundColor: '#F8343D',
        height: 2,
        width: width / 8,
        marginLeft: 6
    }
});
