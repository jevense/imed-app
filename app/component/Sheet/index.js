import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import Search from "../Search";
import TopNavigation from "../Menu";
import ListItem from "./ListItem";
import GridItem from "./GridItem";


class Sheet extends Component<{}> {

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
                <TopNavigation style={{padding: 10}}/>
            </View>,
        };
    };

    render() {
        let {itemWidth, columnType, dataSource,} = this.props;

        let result = this.switchType();
        return (
            <FlatList
                key={result.keyType}
                contentContainerStyle={styles.contentContainerStyle}
                ListHeaderComponent={() => (<Text style={{fontWeight: 'bold', fontSize: 20}}>轮播图</Text>)}
                data={dataSource}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => result.renderType(item, itemWidth)}
                {...result.separatorType}
                {...columnType}
            />
        );
    }

    switchType() {
        let {isList, columnType,} = this.props;
        if (isList) {
            return {
                keyType: 'list',
                renderType: ListItem,
                separatorType: {ItemSeparatorComponent: () => <View style={{height: 1, backgroundColor: 'gray'}}/>}
            }
        } else {
            return {
                keyType: 'grid',
                renderType: GridItem,
                separatorType: {}
            }
        }
    }
}

export default connect(
    (state) => ({
        isList: state.sheet.isList,
        dataSource: state.sheet.dataSource,
        columnType: state.sheet.columnType,
        itemWidth: state.sheet.itemWidth,
    })
)(Sheet)

const styles = StyleSheet.create({
    person: {
        marginLeft: 10,
        marginRight: 10,
    },
    contentContainerStyle: {
        paddingVertical: 20,
    },
});
