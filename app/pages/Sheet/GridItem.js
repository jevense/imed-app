import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {CachedImage} from "react-native-img-cache";

export default ({item, itemWidth, openReader}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                openReader(item.key)
            }}
        >
            <View style={{width: itemWidth, alignItems: 'center'}}>
                <CachedImage style={{width: itemWidth * 0.72, height: itemWidth * 1}}
                       source={item.image}
                />
                <Text style={{padding: 5, fontSize: 12}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
