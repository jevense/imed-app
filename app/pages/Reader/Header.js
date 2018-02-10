import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {goBack} from "../../actions/readerAction";
import Ionicons from "react-native-vector-icons/Ionicons";

class Header extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, goBack} = this.props;
        return (<View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Ionicons name='ios-arrow-back-outline'
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Ionicons name='ios-bookmark-outline'
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goBack()}>
                    <Ionicons name='ios-more-outline'
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
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
        position: 'relative',
        top: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    left: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    right: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    itemIcon: {
        marginHorizontal: 10,
    }
});

