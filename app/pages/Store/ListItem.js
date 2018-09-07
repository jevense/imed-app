import React from "react"
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import Swipeout from 'react-native-swipeout'

export default ({item}) => (
    <Swipeout
        autoClose={true}
        right={[
            {
                text: '收藏',
                type: 'primary',
                onPress: () => {

                }
            },
            {
                text: '加入购物车',
                type: 'delete',
                onPress: () => {
                }
            }
        ]}>
        <TouchableOpacity onPress={() => {
            console.log('打开图书')
        }} style={styles.navRight}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 10,
            }}>
                <Image style={{width: 72, height: 100}} source={item.image}/>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 17}}>{item.title}</Text>
                    <Text style={{fontSize: 15, color: 'gray'}}>图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍图书介绍</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={{color: 'gray'}}>主编：{item.editor}</Text>
                        <Text style={{color: 'gray'}}>大小：{item.size}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </Swipeout>)


const styles = StyleSheet.create({
    btnDefaultStyle: {
        padding: 8,
        marginVertical: 4,
        paddingHorizontal: 8,
        borderColor: '#FC0D1B',
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
    },
});

