import React, {Component} from 'react';
import {
    DeviceEventEmitter, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity,
    View
} from 'react-native';
import linkageData from './linkage.json'

export default class LocalSheet extends Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            dataAry: linkageData,
            cell: 0  //默认选中第一行
        };
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    style={{width: 80}}
                    data={this.state.dataAry} //数据源
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this.cellAction(item)}>
                            <View style={{height: 60, flexDirection: 'row', alignItems: 'center'}}>
                                {/*<View style={{*/}
                                {/*height: 50,*/}
                                {/*width: 5,*/}
                                {/*backgroundColor: item.index == this.state.cell ? 'red' : 'rgba(0,0,0,0)'*/}
                                {/*}}/>*/}
                                <Text style={{marginLeft: 20}}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>)} //每一行render
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: 'cyan'}}/>} //分隔线
                    keyExtractor={(item) => item.title}  //使用json中的title动态绑定key
                />
            </ScrollView>
        );
    }

    //点击某行
    cellAction = (item) => {
        // alert(item.index)
        if (item.index < this.state.dataAry.length - 1) {
            this.setState({
                cell: item.index
            });
            DeviceEventEmitter.emit('left', item.index); //发监听
        }

    };

    componentWillUnmount() {
        this.listener.remove();
    }

    componentWillMount() {
        this.listener = DeviceEventEmitter.addListener('right', (e) => {
            this.refs.FlatList.scrollToIndex({animated: true, index: e - 1})
            this.setState({
                cell: e - 1
            })
        });
    }

};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
