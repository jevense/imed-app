import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Button} from "react-native-elements";

export default ({item, navigation}) => (
    <TouchableOpacity onPress={() => {
    }}>
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
            <View>
                <Button buttonStyle={[styles.btnDefaultStyle]}
                        backgroundColor='white'
                        color='#FC0D1B'
                        fontWeight={'100'}
                        title={'在线阅读'}
                        onPress={() => {
                            navigation.navigate('Reader')
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
    </TouchableOpacity>)


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

