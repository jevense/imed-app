import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";

class Footer extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, drawer, changeModalVisible} = this.props;

        return (<View style={styles.container}>
            <Button
                onPress={
                    () => {
                        changeModalVisible(false);
                        drawer().open();
                    }
                }
                title={'目录'}
            />
            <Button
                onPress={
                    () => (navigation.goBack())
                }
                title={'跳转'}
            />
            <Button
                onPress={
                    () => (navigation.goBack())
                }
                title={'字体'}
            />
            <Button
                onPress={
                    () => (navigation.goBack())
                }
                title={'笔记'}
            />
        </View>)
    }
}

export default connect(
    (state) => ({
        modalVisible: state.reader.modalVisible
    }),
    (dispatch) => ({
        changeModalVisible: (value) => dispatch(changeModalVisible(value)),
    })
)(Footer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
});

