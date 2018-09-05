import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux"
import {closeSearch} from "../../actions/sheetAction"
import {SearchBar} from "react-native-elements"
import TabSwitch from "./TabSwitch"
import Ionicons from "react-native-vector-icons/Ionicons"

class Search extends Component {

    static navigationOptions = ({navigation, navigationOptions}) => {
        // navigationOptions.tabBarVisible = false;

        let {
            params = {}
        } = navigation.state

        let {
            closeSearch = () => {
            }
        } = params

        return {
            headerLeft: <TouchableOpacity onPress={() => {
                navigation.navigate('Scanner')
            }}>
                <Ionicons name='ios-qr-scanner'
                          size={25}
                          style={{color: '#FC0D1B', marginHorizontal: 10}}
                />
            </TouchableOpacity>,
            headerTitle: (<SearchBar
                round
                lightTheme
                containerStyle={{backgroundColor: '#F7F7F7', borderTopWidth: 0, borderBottomWidth: 0}}
                inputStyle={{margin: 0, backgroundColor: '#E9E9EF', width: 240}}
                icon={{type: 'ionicon', name: 'ios-search', style: {top: 7.5, left: 10}}}
                placeholder='请输入搜索关键词'
                // placeholderTextColor={'#E9E9EF'}
            />),
            headerRight: (
                <TouchableOpacity onPress={closeSearch}>
                    <Text style={{color: '#FC0D1B', paddingHorizontal: 10}}>取消</Text>
                </TouchableOpacity>),
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({
            closeSearch: this.props.closeSearch
        })
    }

    render() {
        return (
            <TabSwitch/>
        )
    }
}

export default connect(
    (state) => ({
        // searchVisible: state.sheet.searchVisible,
    }),
    (dispatch) => ({
        closeSearch: () => dispatch(closeSearch()),
    })
)(Search)
