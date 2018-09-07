import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

const {width, height} = Dimensions.get('window');

class ProductList extends Component {

    static navigationOptions = ({navigation, navigationOptions}) => {
        navigationOptions.tabBarVisible = false
        return {
            title: '图书详情',
            headerRight: (
                <TouchableOpacity onPress={() => {
                }}>
                    <Ionicons name={'ios-share-outline'}
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
            ),
        };
    }

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: 10,
                    }}>
                        <Image style={{width: 72, height: 100}} source={require('../../assets/cover/01v1.0.0.jpg')}/>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <Text style={{fontSize: 17}}>内科学</Text>
                            <Text style={{fontSize: 15, color: 'gray'}}>图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end'}}>
                                <Text style={{color: 'gray'}}>主编：</Text>
                                <Text style={{color: 'gray'}}>大小：</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menus}>
                        <TouchableHighlight style={styles.menuContainer} onPress={() => {
                        }}>
                            <View style={styles.menu}>
                                <Ionicons name='ios-book-outline'
                                          size={25}
                                          sstyle={styles.navIcon}/>
                                <Text>免费试读</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuContainer} onPress={() => {
                        }}>
                            <View style={styles.menu}>
                                <Ionicons name='ios-heart-outline'
                                          size={25}
                                          sstyle={styles.navIcon}/>
                                <Text>收藏</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuContainer} onPress={() => {
                        }}>
                            <View style={styles.menu}>
                                <Ionicons name='ios-cart-outline'
                                          size={25}
                                          sstyle={styles.navIcon}/>
                                <Text>加入购物车</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <View>
                            <Text>书籍简介</Text>
                        </View>
                        <View>
                            <Text>书籍简介</Text>
                        </View>
                        <View>
                            <TouchableHighlight style={styles.buyButton} onPress={() => {
                            }}>
                                <Ionicons name='ios-arrow-down-outline'
                                          size={25}
                                          sstyle={styles.navIcon}/>

                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
                <TouchableHighlight style={styles.buyButton} onPress={() => {
                }}>
                    <View style={styles.buyText}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold'
                        }}>立即购买</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    menus: {flex: 1, flexDirection: 'row'},
    menuContainer: {
        width: width / 3,
        height: 60,
        borderWidth: 1,
        borderColor: 'white',
    },
    menu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButton: {
        position: 'absolute',
        bottom: 0,
    },
    buyText: {
        width: width,
        height: 110,
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    },
    itemIcon: {
        margin: 10,
    }
})

export default ProductList;
