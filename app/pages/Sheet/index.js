import React, {Component} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {Divider} from "react-native-elements";
import Search from "../Search/index";
import Menu from "./Menu";
import ListItem from "./ListItem";
import GridItem from "./GridItem";
import SwiperItem from "./SwiperItem";
import Reader from "../Reader";
import {openReader} from "../../actions/readerAction";


class Sheet extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: {}
        };
    };


    static navigationOptions = ({navigation}) => {

        return {
            headerLeft: <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DrawerOpen')
                }}
            >
                <Image
                    source={require('../../assets/Profile_tabBar_Select_Image.png')}
                    style={styles.person}
                />
            </TouchableOpacity>,
            headerTitle: '书架',
            headerRight: <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{padding: 10}}
                    onPress={() => {
                        navigation.navigate('Search')
                    }}>
                    <Ionicons name='ios-search'
                              size={25}
                              style={{color: '#FC0D1B'}}
                    />
                </TouchableOpacity>
                <Menu style={{padding: 10}}/>
            </View>,
        };
    };

    componentWillMount() {
        // async function getDataSource() {
        //     let response = await fetch();
        //     let json = await response.json();
        //     // console.log(json['books']);
        //     return json['books']
        // }
        fetch('http://192.168.8.144:8080/imed/book.json')
            .then((response) => response.json())
            .then((jsondata) => {
                let dataSource = jsondata['books'].map(item => {
                    let {id: key = "", name: title = "", edition: editor = "", size = "", cover} = item;
                    let image = cover ? {url: cover.replace('http://', 'https://')} : require('../../assets/cover/maga-cover.jpg');
                    return {key, title, editor, size, image}
                });
                this.setState({dataSource});
            });
    };

    render() {
        let {itemWidth, columnType, openReader, dataSource,} = this.props;

        let result = this.switchType();

        // let dataSource = this.state.dataSource;

        return (
            <View>
                <StatusBar backgroundColor={'black'}/>
                <Reader/>
                <FlatList
                    key={result.keyType}
                    contentContainerStyle={styles.contentContainerStyle}
                    ListHeaderComponent={() => (<SwiperItem/>)}
                    data={dataSource}
                    keyExtractor={(item) => item.key}
                    // keyExtractor={(item) => item.title}
                    renderItem={
                        ({item}) => result.renderType({item, itemWidth, openReader})
                    }
                    {...result.separatorType}
                    {...columnType}
                />
            </View>
        );
    }

    switchType() {
        let {isList, columnType, itemWidth,} = this.props;
        if (isList) {
            return {
                keyType: 'list',
                renderType: ListItem,
                separatorType: {
                    ItemSeparatorComponent: () => <Divider style={{height: 1, backgroundColor: 'gray'}}/>
                }
            }
        } else {
            return {
                keyType: 'grid',
                renderType: GridItem,
                separatorType: {
                    ItemSeparatorComponent: () => <Divider style={{height: 10, backgroundColor: '#E9E9EF'}}/>
                }
            }
        }
    }
}

export default connect(
    (state) => ({
        isList: state.sheet.isList,
        columnType: state.sheet.columnType,
        itemWidth: state.sheet.itemWidth,
        dataSource: state.sheet.dataSource,
    }),
    (dispatch) => ({
        openReader: (bookId) => dispatch(openReader(bookId)),
    })
)(Sheet)

const styles = StyleSheet.create({
    person: {
        marginLeft: 10,
        marginRight: 10,
    },
    contentContainerStyle: {},
});
