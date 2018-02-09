import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class MineItemCell extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    console.log(...this.props)
                    // this.props.navigation.navigate('Person')
                }}>
                    <View style={[styles.content, this.props.style]}>
                        <Image style={styles.icon} source={this.props.image}/>
                        <Text style={{fontSize: 14, color: '#222222',}}>{this.props.title}</Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}}/>
                        <Text style={{fontSize: 13, color: '#999999',}}>{this.props.subtitle}</Text>
                        <Image style={styles.arrow} source={require('../../assets/pesion/cell_arrow.png')}/>
                    </View>
                    <View style={{height: 1, backgroundColor: 'white'}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});

export default MineItemCell;
