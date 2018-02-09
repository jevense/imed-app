import React, {Component} from 'react';
import Drawer from 'react-native-drawer'
import {Dimensions, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Content from "./Content";

class DrawerComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation} = this.props;
        return (
            <Drawer
                // open={true}
                openDrawerOffset={100}
                tapToClose={true}
                ref={(ref) => this.drawer = ref}
                content={<Text>侧边栏</Text>}
            >
                <Content navigation={navigation}
                         drawer={() => (this.drawer)}
                />
            </Drawer>
        )
    }
}

export default connect()(DrawerComponent)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});
