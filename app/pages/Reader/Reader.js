import React, {Component} from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {connect} from "react-redux";
import Container from "./Container";
import Drawer from "react-native-drawer";
import Category from "./Category";


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
                content={<Category/>}
            >
                <StatusBar hidden/>
                <Container {...{navigation}}
                           drawer={() => (this.drawer)}
                />
            </Drawer>
        )
    }
}

export default connect()(Reader)

const styles = StyleSheet.create({});
