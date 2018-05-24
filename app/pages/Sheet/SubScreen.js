import React, {Component} from 'react'
import Drawer from 'react-native-drawer'
import {Button, Image, Text, View} from 'react-native';
import TouchableItem from "react-navigation/src/views/TouchableItem"

export default class SubScreen extends Component<{}> {

    static navigationOptions = ({navigation}) => {
        const {
            params = {
                openControlPanel: () => {
                }
            }
        } = navigation.state;
        return {
            headerLeft: <TouchableItem
                onPress={params.openControlPanel}
            >
                <Image source={require('../../assets/Profile_tabBar_Select_Image.png')}/>
            </TouchableItem>,
            headerTitle: <Button title="Info" onPress={params.openControlPanel}/>,
            headerRight: <Button title="Info" onPress={params.openControlPanel}/>,
        };
    };

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    componentDidMount() {
        // We can only set the function after the component has been initialized
        this.props.navigation.setParams({openControlPanel: this.openControlPanel});
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Drawer
                side="left" //抽屉方向 top／left／right／bottom
                open={false}//默认是否打开抽屉
                tapToClose={true}//点击内容处 会关闭抽屉
                type='displace' //抽屉出现的方式：overlay：抽屉覆盖内容 static:抽屉一只在内容后面 打开的时内容会滑动，displace：不会覆盖的 进出
                openDrawerOffset={0.2} // 抽屉占整个屏幕的百分比（1-0.2=0.8）
                closedDrawerOffset={0}//关闭抽屉后 抽屉在屏幕中的显示比例
                styles={drawerStyles}//抽屉样式，背景色 透明度，阴影啥的
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{flex: 1, backgroundColor: 'red'}}>
                        <Text onPress={() => {
                            this.closeControlPanel()
                        }} style={{fontSize: 100}}>抽屉的内容</Text>
                    </View>}
            >
                <View style={{flex: 1, backgroundColor: 'blue'}}>
                    <Text onPress={() => {
                        this.openControlPanel()
                    }} style={{fontSize: 30,}}>打开抽屉</Text>
                </View>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Profile', {name: 'Jane'})
                    }
                />
            </Drawer>
        )
    }
}

const drawerStyles = {
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
};
