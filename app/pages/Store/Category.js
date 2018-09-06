import React, {Component} from 'react';
import {FlatList, SectionList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class Category extends Component {

    static navigationOptions = {
        headerTitle: '分类',
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
                <View>
                    <FlatList
                        data={[
                            {title: '推荐', key: 'item1'},
                            {title: '教材', key: 'item2'},
                            {title: '中医', key: 'item3'},
                            {title: '西医', key: 'item4'},
                            {title: '杂志', key: 'item5'}
                        ]}
                        renderItem={
                            ({item, index}) => (
                                <TouchableHighlight onPress={
                                    () => {
                                        this.setState({index,})
                                    }
                                }>
                                    <View
                                        style={[
                                            styles.categoryArea,
                                            this.state.index === index && styles.categoryFocus
                                        ]}>
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                    />
                </View>
                <SectionList
                    style={styles.productArea}
                    ListHeaderComponent={<Text>头部</Text>}
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    sections={[
                        {title: "临床", data: ["item1", "item2"]},
                        {title: "基础", data: ["item3", "item4"]},
                        {title: "公共", data: ["item5", "item6"]}
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
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
        padding: 20,
    },
    productArea: {
        backgroundColor: 'white',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    categoryFocus: {
        backgroundColor: 'white',
    }
})

export default Category;
