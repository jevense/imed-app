import React from "react";
import {Image, Text, View} from "react-native";

export default (item, itemWidth) => (
    <View style={{width: itemWidth, alignItems: 'center'}}>
        <Image style={{width: itemWidth * 0.8, height: itemWidth * 1}}
               source={item.image}/>
        <Text style={{padding: 5, fontSize: 12}}>{item.title}</Text>
    </View>)
