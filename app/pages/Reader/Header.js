import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {goBack} from "../../actions/readerAction";

class Header extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, goBack} = this.props;
        return (<View style={styles.container}>
            <View style={styles.left}>
                <Button
                    onPress={() => goBack()}
                    title={'返回'}
                />
            </View>
            <View style={styles.right}>
                <Button
                    onPress={
                        () => (navigation.goBack())
                    }
                    title={'收藏'}
                />
                <Button
                    onPress={
                        () => (navigation.goBack())
                    }
                    title={'目录'}
                />
            </View>
        </View>)
    }
}

export default connect(
    (state) => ({
        modalVisible: state.reader.modalVisible
    }),
    (dispatch) => ({
        goBack: (value) => dispatch(goBack(value)),
    })
)(Header)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

