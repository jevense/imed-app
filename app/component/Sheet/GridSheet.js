import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingVertical: 20,
    },
});
export default class GridView extends Component {

    constructor(props) {
        super(props);
        let {column = 3, dataSource} = this.props;
        let {height, width} = Dimensions.get('window');
        this.state = {
            dataSource,
            column,
            itemWidth: (width) / column,
        };
    }

    render() {
        return (
            <FlatList
                ListHeaderComponent={() => (<Text style={{fontWeight: 'bold', fontSize: 20}}>轮播图</Text>)}
                numColumns={this.state.column}
                horizontal={false}
                contentContainerStyle={styles.contentContainerStyle}
                data={this.state.dataSource}
                renderItem={({item}) => (
                    <View style={{width: this.state.itemWidth, alignItems: 'center'}}>
                        <Image style={{width: this.state.itemWidth * 0.8, height: this.state.itemWidth * 1}}
                               source={item.image}/>
                        <Text style={{padding: 5, fontSize: 12}}>{item.title}</Text>
                    </View>)
                }
            />
        );
    }
}
