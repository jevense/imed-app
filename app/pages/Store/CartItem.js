import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CheckBox from "react-native-check-box"
import Ionicons from "react-native-vector-icons/Ionicons"
import {connect} from "react-redux"
import {toggleCheck} from "../../actions/sheetAction"

class CartItem extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        let {toggleCheck, itemIndex} = this.props
        let {money, name, description, img, status} = this.props['itemData'];
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={() => toggleCheck(itemIndex)}
                isChecked={status}
                checkedImage={
                    <Ionicons name='ios-checkmark-circle'
                              size={25}
                              style={{color: '#FC0D1B'}}
                    />
                }
                unCheckedImage={
                    <Ionicons name='ios-radio-button-off'
                              size={25}
                              style={{color: '#FC0D1B'}}
                    />
                }
                rightTextView={
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image style={styles.icon} source={{uri: img}}/>
                        <View style={styles.right}>
                            <Text style={styles.nameStyle} numberOfLines={2}>{name}</Text>
                            <Text style={styles.descriptionStyle} numberOfLines={1}>{description}</Text>
                            <View style={styles.right_bot}>
                                <Text style={styles.moneyStyle}>￥{money}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        );
    }
}

export default connect(
    (state) => ({
        cart: state.sheet.cart,
    }),
    (dispatch) => ({
        toggleCheck: (index) => dispatch(toggleCheck(index)),
    })
)(CartItem)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    icon: {
        height: 80,
        width: 80,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#999999'
    },
    right: {
        marginLeft: 15,
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    nameStyle: {
        fontSize: 17,
        color: '#000000'
    },
    descriptionStyle: {
        marginTop: 3,
        fontSize: 13,
        color: '#A9A9A9'
    },
    right_bot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
    },
    moneyStyle: {
        fontSize: 13,
        color: 'red'
    },
    numControllStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reduceStyle: {
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: '#e9e9e9',
    },
    numberViewStyle: {
        height: 35,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberStyle: {
        fontSize: 19,
    },
    increaseStyle: {
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: '#e9e9e9',
    },
});
