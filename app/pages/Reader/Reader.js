import React, {Component} from 'react'
import {Modal, StatusBar, StyleSheet,} from 'react-native'
import {connect} from "react-redux";
import Drawer from "react-native-drawer"
import Side from "./Side"
import Container from "./Container"


class Reader extends Component<{}> {

    constructor(props) {
        super(props)
    };

    render() {
        let {navigation, readerOpened} = this.props;
        return (
            <Modal
                animationType={"fade"}
                visible={readerOpened}
                onRequestClose={() => {
                    // alert("Modal has been closed.")
                }}
            >
                <Drawer
                    acceptPan={false}
                    openDrawerOffset={100}
                    tapToClose={true}
                    ref={(ref) => this.drawer = ref}
                    content={<Side/>}
                >
                    <Container {...{navigation,}}
                               drawer={() => (this.drawer)}
                    />

                </Drawer>
                <StatusBar hidden translucent={false}/>
            </Modal>
        )
    }
}

export default connect(
    (state) => ({
        readerOpened: state.reader.readerOpened,
    })
)(Reader)

const styles = StyleSheet.create({});
