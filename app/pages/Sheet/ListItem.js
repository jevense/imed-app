import React from "react"
import {PixelRatio, StyleSheet, Text, View,Image} from "react-native"
import {Button} from "react-native-elements"
import Swipeout from 'react-native-swipeout'

export default ({item, openReader}) => (
    <Swipeout
        autoClose={true}
        left={[
            {
                text: '取消置顶',
                type: 'secondary',
                onPress: () => {

                }
            },
        ]}
        right={[
            {
                text: '置顶',
                type: 'primary',
                onPress: () => {

                }
            },
            {
                text: '删除',
                type: 'delete',
                onPress: () => {

                }
            }
        ]}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
        }}>
            <Image style={{width: 72, height: 100}} source={item.image}/>
            <View style={{width: 160, marginHorizontal: 5}}>
                <Text style={{fontSize: 17}}>{item.title}</Text>
                <Text style={{color: 'gray'}}>主编：{item.editor}</Text>
                <Text style={{color: 'gray'}}>大小：{item.size}</Text>
            </View>
            <View>
                <Button buttonStyle={[styles.btnDefaultStyle]}
                        backgroundColor='white'
                        color='#FC0D1B'
                        fontWeight={'100'}
                        title={'在线阅读'}
                        onPress={() => {
                            openReader(item.key)
                        }}
                />
                <Button buttonStyle={[styles.btnDefaultStyle]}
                        backgroundColor='white'
                        color='#FC0D1B'
                        fontWeight={'100'}
                        title={'下载'}
                />
            </View>
        </View>
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

