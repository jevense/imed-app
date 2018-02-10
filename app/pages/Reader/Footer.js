import React, {Component} from "react";
import {Button, Dimensions, Slider, StyleSheet, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";

class Footer extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        let {navigation, drawer, changeModalVisible} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.slider}>
                    <Button title={'上一节'} onPress={() => {
                    }}/>
                    <Slider style={{flex: 1}}/>
                    <Button title={'下一节'} onPress={() => {
                    }}/>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity
                        onPress={() => {
                            changeModalVisible(false);
                            drawer().open();
                        }}
                    >
                        <Ionicons name='ios-list-outline'
                                  size={35}
                                  style={styles.itemIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            changeModalVisible(false);
                            drawer().open();
                        }}
                    >
                        <Ionicons name={true ? 'ios-moon-outline' : 'ios-sunny-outline'}
                                  size={35}
                                  style={styles.itemIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            changeModalVisible(false);
                            drawer().open();
                        }}
                    >
                        <Ionicons name='ios-settings-outline'
                                  size={35}
                                  style={styles.itemIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
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
        position: 'relative',
        bottom: 0,
        height: 80,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

