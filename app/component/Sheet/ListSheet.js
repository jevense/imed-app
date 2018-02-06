import React, {Component} from 'react';
import {
    DeviceEventEmitter,
    PixelRatio,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import {Button} from 'react-native-elements'
// import linkageData from './linkage.json'

export default class LocalSheet extends Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            cell: 0  //默认选中第一行
        };
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
                keyExtractor={(item) => item.key}  //使用json中的title动态绑定key
            />
        );
    }

    //点击某行
    cellAction = (item) => {
        // alert(item.index)
        if (item.index < this.state.dataAry.length - 1) {
            this.setState({
                cell: item.index
            });
            DeviceEventEmitter.emit('left', item.index); //发监听
        }

    };

    componentWillUnmount() {
        this.listener.remove();
    }

    componentWillMount() {
        this.listener = DeviceEventEmitter.addListener('right', (e) => {
            this.refs.FlatList.scrollToIndex({animated: true, index: e - 1})
            this.setState({
                cell: e - 1
            })
        });
    }

};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btnDefaultStyle: {
        padding: 8,
        paddingHorizontal: 8,
        borderColor: '#FC0D1B',
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
    },
});
