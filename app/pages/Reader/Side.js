import React from "react";
import {SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default ({chapter = [], bookName = ''}) => (
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
            ListHeaderComponent={<Text style={{fontSize: 30}}>{bookName}</Text>}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Text style={{fontSize: 20, marginHorizontal: 20}}>{item.name}</Text>}
            renderSectionHeader={({section}) => <Text
                style={{fontSize: 25, backgroundColor: 'red'}}>{section.title}</Text>}
            sections={chapter}/>
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
