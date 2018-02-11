import React, {Component} from "react";

const SideMenu = require('react-native-side-menu');

class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+Control+Z for dev menu
                </Text>
            </View>
        );
    }
}

class Application extends React.Component {
    render() {
        const menu = <Menu navigator={navigator}/>;

        return (
            <SideMenu menu={menu}>
                <ContentView/>
            </SideMenu>
        );
    }
}
