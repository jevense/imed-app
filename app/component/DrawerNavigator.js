import React from 'react'
import {DrawerNavigator} from 'react-navigation';
import {Button, Image, StyleSheet} from 'react-native'
import ContentComponent from "./ContentComponent"
import Home from "./Home";
import Person from "./Person/index";

class MyNotificationsScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/BookShelf_tabBar_Normal_Image.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default DrawerNavigator({
    Home: {
        screen: Home,
    },
    Person: {
        screen: Person,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    drawerWidth: 300, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: ContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Person, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});