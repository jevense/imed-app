import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
// 引用头部组件
//引用插件
import {connect} from "react-redux"
import {openSearch} from "../../actions/sheetAction"
import Ionicons from "react-native-vector-icons/Ionicons"
import {toggleView} from "../../actions/storeAction"
import ListItem from "./ListItem"
import {Divider} from "react-native-elements"
import resource from "../../resource"
import docs from '../../storage/book'
import Search from "../Search"

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

class ProductList extends Component {

    static navigationOptions = ({navigation, navigationOptions}) => {
        let {
            params = {}
        } = navigation.state

        let {
            isList = true,
            toggleView = () => {
            }
        } = params
        navigationOptions.tabBarVisible = false
        return {
            headerTitle: (<TouchableOpacity onPress={openSearch}>
                <View style={styles.searchBox}>
                    <Image source={require('../../assets/img/search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchContent}>搜索图书</Text>
                </View>
            </TouchableOpacity>),
            headerRight: (
                <TouchableOpacity onPress={() => {
                    toggleView();
                    navigation.setParams({isList: !isList,})
                }}>
                    <Ionicons name={isList ? 'ios-keypad-outline' : 'ios-list-box-outline'}
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
            ),
        };
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.navigation.setParams({
            isList: this.props.isList,
            toggleView: this.props.toggleView
        })
    };

    render() {
        let books = docs.map(item => {
            let {id: key = "", name: title = "", edition: editor = "", size = "", cover, textbook} = item;
            let image = textbook ? resource[key] : {url: cover};
            return {key, title, editor, size, image}
        });

        return (
            <View style={styles.container}>
                <Search/>
                <FlatList
                    data={books}
                    keyExtractor={(item, index) => `book${index}`}
                    renderItem={({item}) => ListItem({item})}
                    ItemSeparatorComponent={() => <Divider style={{height: 1, backgroundColor: 'gray'}}/>}
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({
        isList: state.store.isList,
    }),
    (dispatch) => ({
        toggleView: () => dispatch(toggleView()),
    })
)(ProductList)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
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
        width: width * 0.6,
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
    },
    itemIcon: {
        color: '#FC0D1B',
        margin: 10,
    },
});
