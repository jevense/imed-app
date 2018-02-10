import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Swiper from 'react-native-swiper';


export default class SwiperItem extends Component<{}> {
    render() {
        return (
            <View style={styles.wrapper}>
                <Swiper autoplay
                        paginationStyle={{bottom: 5}}
                    // showsPagination={false}
                >
                    <View style={styles.slide}>
                        <Text style={styles.text}>第一页</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>第二页</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>第三页</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        height: 100,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
