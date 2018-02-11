import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

export default ({item, itemWidth, openReader}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                openReader()
            }}
        >
            <View style={{width: itemWidth, alignItems: 'center'}}>
                <Image style={{width: itemWidth * 0.8, height: itemWidth * 1}}
                       source={item.cover}/>
                <Text style={{padding: 5, fontSize: 12}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
