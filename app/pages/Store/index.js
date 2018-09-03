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

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

export default class home extends Component {

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
                this.props.navigation.navigate('Search')
            }} style={styles.navLeft}>
                <Image source={require('../../assets/img/scanning.png')} style={styles.navIcon}/>
                <Text style={styles.navText}>扫一扫</Text>
            </TouchableOpacity>
        )
    }

    // 头部中间
    renderTitleItem() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Search')
            }}>
                <View style={styles.searchBox}>
                    <Image source={require('../../assets/img/search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchContent}>搜索图书</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 头部右侧
    renderRightItem() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('MessageCenter')
            }} style={styles.navRight}>
                {/*<Image source={require('../../assets/img/remind.png')} style={styles.navIcon}/>*/}
                <Ionicons name='ios-menu'
                          size={25}
                          sstyle={styles.navIcon}/>
                <Text style={styles.navText}>分类</Text>
            </TouchableOpacity>
        )
    }

    // 滑动tab
    renderScrollableTab() {
        let label = this.state.label
        if (this.state.tabShow) {
            return (
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
                                    <WellChose key={index}/>
                                )
                            } else {
                                return (
                                    <Otherpage tabLabel={item} key={index}/>
                                )
                            }
                        })
                    }
                </ScrollableTabView>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonHead
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem()}
                    rightItem={() => this.renderRightItem()}
                />
                <View style={{flex: 1}}>
                    {this.renderScrollableTab()}
                </View>
            </View>
        );
    }
}
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
