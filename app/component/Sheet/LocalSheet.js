import React from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native';
// import Dimensions from 'Dimensions'; //获取屏幕的宽高

// const ScreenWidth = Dimensions.get('window').width;
// const ScreenHeight = Dimensions.get('window').height;

export default class LocalSheet extends React.Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    render() {
        return (
            <SectionList
                keyExtractor={(item, index) => ("index" + index + item)}
                renderItem={
                    ({item}) => (
                        <View>
                            <Text>{item.name}</Text>
                            {console.log(item)
                                // item.map((item, index) => (
                                //     <TouchableOpacity
                                //         key={index}
                                //         onPress={
                                //             () => {
                                //             }
                                //         }
                                //         underlayColor="transparent">
                                //         <View style={styles.row}>
                                //             <Image source={require('../../assets/cover/fc442b02fad726d0.png')}
                                //                    style={{width: 100, height: 140}}
                                //             />
                                //             <Text>{item.name}</Text>
                                //         </View>
                                //     </TouchableOpacity>
                                // ))
                            }
                        </View>
                    )
                }
                // renderSectionHeader={({section}) =>
                //     <Text>{section.title}</Text>
                // }
                sections={[
                    {
                        data: [
                            {cover: 'fc442b02fad726d0.png', name: '1data1', status: false,},
                            {cover: 'fc442b02fad726d0.png', name: '1data1', status: false,},
                        ], title: '1title'
                    }
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    navigatorStyle: {
        height: 64,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 33.5,
        fontSize: 17,
        fontWeight: '600',
    },
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    row: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        // width: (ScreenWidth - 1) / 4,
        // height: (ScreenWidth - 1) / 4,
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderRadius: 5,
        // borderColor: '#E6E6E6'
    },
    sectionHeader: {
        marginLeft: 10,
        padding: 6.5,
        fontSize: 12,
        color: '#787878'
    },
    remark: {
        margin: 10,
        fontSize: 10,
        color: '#D2D2D2',
        marginBottom: 10,
        alignSelf: 'center',
    },
});