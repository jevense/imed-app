import React, {Component} from 'react';
import {FlatList, Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Button} from 'react-native-elements'

export default class LocalSheet extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                ListHeaderComponent={() => (<Text style={{fontWeight: 'bold', fontSize: 20}}>轮播图</Text>)}
                data={this.props.dataSource} //数据源
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => this.cellAction(item)}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 10,
                        }}>
                            <Image style={{width: 80, height: 100}} source={item.image}/>
                            <View style={{width: 160, marginHorizontal: 5}}>
                                <Text style={{fontSize: 17}}>{item.title}</Text>
                                <Text style={{color: 'gray'}}>主编：{item.editor}</Text>
                                <Text style={{color: 'gray'}}>大小：{item.size}</Text>
                            </View>
                            <Button buttonStyle={[styles.btnDefaultStyle]}
                                    backgroundColor='white'
                                    color='#FC0D1B'
                                    fontWeight={'100'}
                                    title={'在线阅读'}
                            />
                        </View>
                    </TouchableOpacity>)} //每一行render
                ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: 'gray'}}/>} //分隔线
                // keyExtractor={item => `${item.key}`}  //使用json中的title动态绑定key
                keyExtractor={(item, index) => item.key.toString()}
            />
        );
    }

};

let styles = StyleSheet.create({
    btnDefaultStyle: {
        padding: 8,
        paddingHorizontal: 8,
        borderColor: '#FC0D1B',
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
    },
});
