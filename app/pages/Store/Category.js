import React, {Component} from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

class Category extends Component {

    static navigationOptions = {
        headerTitle: '分类',
    }

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <SectionList
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: "bold"}}>{title}</Text>
                    )}
                    sections={[
                        {title: "Title1", data: ["item1", "item2"]},
                        {title: "Title2", data: ["item3", "item4"]},
                        {title: "Title3", data: ["item5", "item6"]}
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        flexDirection:'row',
    },
})

export default Category;
