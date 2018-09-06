import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SuperGridSectionList} from 'react-native-super-grid'

const {width, height} = Dimensions.get('window');

class Category extends Component {

    static navigationOptions = {
        title: '分类',
        headerBackTitle: '',
    }

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.categoryArea}>
                    <FlatList
                        data={[
                            {title: '推荐', key: 'item1'},
                            {title: '教材', key: 'item2'},
                            {title: '中医', key: 'item3'},
                            {title: '西医', key: 'item4'},
                            {title: '杂志', key: 'item5'}
                        ]}
                        keyExtractor={(item) => `cate${item.key}`}
                        renderItem={
                            ({item, index}) => (
                                <TouchableHighlight onPress={
                                    () => {
                                        this.setState({index,})
                                    }
                                }>
                                    <View
                                        style={[
                                            styles.categoryBar,
                                            this.state.index === index && styles.categoryFocus
                                        ]}>
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                    />
                </View>
                <View style={styles.productArea}>
                    <SuperGridSectionList
                        itemDimension={80}
                        sections={[
                            {
                                title: '推荐',
                                data: [
                                    {name: '医学人文', code: '#1abc9c'}, {name: '临床技能学', code: '#2ecc71'},
                                    {name: '医学人文', code: '#3498db'}, {name: '临床技能学', code: '#9b59b6'},
                                    {name: '医学人文', code: '#34495e'}, {name: '临床技能学', code: '#16a085'},
                                    {name: '医学人文', code: '#27ae60'},
                                ]
                            },
                            {
                                title: '中医',
                                data: [
                                    {name: '医学人文', code: '#1abc9c'}, {name: '临床技能学', code: '#2ecc71'},
                                    {name: '医学人文', code: '#3498db'}, {name: '临床技能学', code: '#9b59b6'},
                                    {name: '医学人文', code: '#34495e'}, {name: '临床技能学', code: '#16a085'},
                                    {name: '医学人文', code: '#27ae60'},
                                ]
                            },
                            {
                                title: '西医',
                                data: [
                                    {name: '医学人文', code: '#1abc9c'}, {name: '临床技能学', code: '#2ecc71'},
                                    {name: '医学人文', code: '#3498db'}, {name: '临床技能学', code: '#9b59b6'},
                                    {name: '医学人文', code: '#34495e'}, {name: '临床技能学', code: '#16a085'},
                                    {name: '医学人文', code: '#27ae60'},
                                ]
                            },
                            {
                                title: '杂志',
                                data: [
                                    {name: '医学人文', code: '#1abc9c'}, {name: '临床技能学', code: '#2ecc71'},
                                    {name: '医学人文', code: '#3498db'}, {name: '临床技能学', code: '#9b59b6'},
                                    {name: '医学人文', code: '#34495e'}, {name: '临床技能学', code: '#16a085'},
                                    {name: '医学人文', code: '#27ae60'},
                                ]
                            }
                        ]}
                        style={styles.gridView}
                        contentContainerStyle={{marginTop: 0}}
                        renderItem={({item}) => (
                            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.code}</Text>
                            </View>
                        )}
                        renderSectionHeader={({section}) => (
                            <View style={styles.header}>
                                <Text>{section.title}</Text>
                                <TouchableHighlight onPress={
                                    () => {
                                        this.props.navigation.navigate('Products')
                                    }
                                }>
                                    <Text>更多</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },
    categoryArea: {
        flex: 1,
    },
    categoryBar: {
        padding: 20,
        textAlign: 'center',
    },
    productArea: {
        flex: 4,
        backgroundColor: 'white',
    },
    gridView: {
        padding: 0,
        marginTop: -10,
    },
    itemContainer: {
        width: 80,
        height: 80,
    },
    itemName: {},
    itemCode: {},
    header: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productItem: {
        width: 80,
        height: 80,
    },
    categoryFocus: {
        backgroundColor: 'white',
    }
})

export default Category;
