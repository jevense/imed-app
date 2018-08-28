import React from "react"
import {SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {connect} from "react-redux"
import {changeSection} from "../../actions/readerAction"

const Side = ({chapter, changeSection,}) => (
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
            ListHeaderComponent={<Text style={{fontSize: 30}}>{chapter.bookName}</Text>}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                <TouchableOpacity onPress={() => changeSection(item.id)}>
                    <Text style={{fontSize: 20, marginHorizontal: 20}}>{item.name}</Text>
                </TouchableOpacity>
            }
            renderSectionHeader={({section}) => <Text
                style={{fontSize: 25, backgroundColor: 'red'}}>{section.title}</Text>}
            sections={chapter.chapterData}/>
    </View>
)

export default connect(
    (state) => ({
        chapter: state.reader.chapter,
    }),
    (dispatch) => ({
        changeSection: (value) => dispatch(changeSection(value)),
    })
)(Side);

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
