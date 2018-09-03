import React, {Component} from "react"
import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native"
import {connect} from "react-redux"
import Ionicons from "react-native-vector-icons/Ionicons"
import {closeReader, goBack} from "../../actions/readerAction"

class Header extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, closeReader} = this.props;
        return (<View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={closeReader}>
                    <Ionicons name='ios-arrow-back-outline'
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={closeReader}>
                    <Ionicons name='ios-bookmark-outline'
                              size={25}
                              style={styles.itemIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={closeReader}>
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
        closeReader: () => dispatch(closeReader()),
    })
)(Header)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        height: 50,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
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

