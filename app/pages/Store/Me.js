import React, {Component} from 'react';
import {Dimensions, Image, SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const numColumns = 5;

export default class Me extends Component {
    render() {
        const data = [
            {
                data: [
                    {key: 'mine_icon_hot', title: '排行榜'},
                    {key: 'mine_icon_preview', title: '审帖'},
                    {key: 'mine_icon_manhua', title: '漫画'},
                    {key: 'mine_icon_activity', title: '我的收藏'},
                    {key: 'mine_icon_nearby', title: '附近'},
                    {key: 'mine_icon_random', title: '随机穿越'},
                    {key: 'mine_icon_feedback', title: '意见反馈'},
                    {key: 'mine_icon_more', title: '更多'},
                ],
                title: 'content',
            }];
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={data}
                    renderItem={this._renderSectionItem}
                    ListHeaderComponent={this._ListHeaderComponent}
                    ListFooterComponent={this._ListFooterComponent}
                    keyExtractor={this._keyExtractor}
                />
            </SafeAreaView>
        )
    }

    _keyExtractor = (item, index) => {
        return item.title;
    }

    _ListHeaderComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.header}
            >
                <View style={styles.headerUser}>
                    <Image
                        source={{uri: 'default_header'}}
                        style={{width: 50, height: 50}}
                    />
                    <Text style={{marginHorizontal: 10}}>百思不得姐</Text>
                    <Image
                        source={{uri: 'profile_level1'}}
                        style={{width: 36, height: 15}}
                    />
                </View>
                <Image
                    source={{uri: 'arrow_right'}}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.item}
            >
                <Image
                    source={{uri: item.key}}
                    style={styles.itemImage}
                />
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    _renderSectionItem = ({item, index, section}) => {
        console.log(section)
        return (
            <Text key={index}>{item.title}</Text>
            // <FlatList
            //     data={item}
            //     numColumns={numColumns}
            //     renderItem={this._renderItem}
            //     style={{backgroundColor: '#fff'}}
            //     scrollEnabled={false}
            // />
        )
    }

    _ListFooterComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.footer}
            >
                <Text>好友动态</Text>
                <Image
                    source={{uri: 'arrow_right'}}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    headerUser: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#fff',
        width: width / numColumns,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 12,
    }

})
