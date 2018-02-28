import React from "react";
import {SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default (dataSource) => (
    <View style={styles.container}>
        <View style={styles.title}>
            <TouchableOpacity onPress={() => {
            }}>
                <Text>目录</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            }}>
                <Text>书签</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            }}>
                <Text>笔记</Text>
            </TouchableOpacity>
        </View>
        <SectionList
            ListHeaderComponent={<Text style={{fontSize: 30}}>{'书名'}</Text>}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => <Text style={{fontSize: 20, marginHorizontal: 20}}>{item.title}</Text>}
            renderSectionHeader={({section}) => <Text
                style={{fontSize: 25, backgroundColor: 'red'}}>{section.title}</Text>}
            sections={[ // 不同section渲染相同类型的子组件
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面1'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面2'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面3'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面4'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面5'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面6'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面7'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面8'},
                {data: [{title: '目录1'}, {title: '目录2'}, {title: '目录3'}], title: '封面9'},
            ]}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999999',
    },
    title: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
