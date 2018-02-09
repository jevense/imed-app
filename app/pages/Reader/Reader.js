import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {connect} from "react-redux";
import Container from "./Container";
import Drawer from "react-native-drawer";


class Reader extends Component<{}> {

    static navigationOptions = ({navigation, navigationOptions}) => {
        navigationOptions.tabBarVisible = false;
        return ({header: null,})
    };

    render() {
        let {navigation} = this.props;
        return (
            <Drawer
                openDrawerOffset={100}
                tapToClose={true}
                ref={(ref) => this.drawer = ref}
                content={<Text>侧边栏</Text>}
            >
                <Container navigation={navigation}
                           drawer={() => (this.drawer)}
                />
            </Drawer>
        )
    }
}

export default connect()(Reader)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
