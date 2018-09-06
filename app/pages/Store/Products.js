import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
// 引用头部组件
//引用插件
import {connect} from "react-redux"
import {openSearch} from "../../actions/sheetAction"
import Ionicons from "react-native-vector-icons/Ionicons"
import {toggleView} from "../../actions/storeAction"

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

class Products extends Component {

    static navigationOptions = ({navigation, navigationOptions}) => {
        let {
            params = {}
        } = navigation.state

        let {
            isList = true,
            toggleView = () => {
                isList = false
            }
        } = params
        return {
            headerTitle: (<TouchableOpacity onPress={openSearch}>
                <View style={styles.searchBox}>
                    <Image source={require('../../assets/img/search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchContent}>搜索图书</Text>
                </View>
            </TouchableOpacity>),
            headerRight: (
                <TouchableOpacity onPress={toggleView}>
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
        return (
            <View style={styles.container}>
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
)(Products)

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
    },
});
