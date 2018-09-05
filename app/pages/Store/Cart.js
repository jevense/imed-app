import React, {Component} from "react";
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux"
import {Header} from "react-native-elements"
import {closeCart, deleteCart, toggleSelectAll} from "../../actions/sheetAction"
import Ionicons from "react-native-vector-icons/Ionicons"
import CartItem from "./CartItem"
import CheckBox from "react-native-check-box"

class Cart extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        let {cartVisible, closeCart, cart, toggleSelectAll, deleteCart} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={cartVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
            >
                <Header
                    outerContainerStyles={{backgroundColor: '#F7F7F7'}}
                    leftComponent={
                        <TouchableOpacity onPress={closeCart}>
                            <Ionicons name='ios-close-circle-outline'
                                      size={25}
                                      style={{color: '#FC0D1B'}}
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={{text: '购物车', style: {fontSize: 20}}}
                    rightComponent={
                        <TouchableOpacity onPress={deleteCart}>
                            <Text style={{color: '#FC0D1B'}}>删除</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.container}>
                    <FlatList data={cart.datas}
                              ItemSeparatorComponent={
                                  () => <View style={{height: 10, backgroundColor: '#e9e9e9'}}/>
                              }
                              renderItem={
                                  ({item, index}) => <CartItem itemData={item}
                                                               itemIndex={index}/>
                              }
                              keyExtractor={(item) => item.name}
                    />
                    <View style={styles.tool}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={toggleSelectAll}
                                isChecked={cart.allSelected}
                                rightText={"全选"}
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
                            />
                            <Text style={styles.allMoneyText}>
                                ￥{cart.totalMoney}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.balance}>
                            <Text style={styles.balanceText}>去结算</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tool: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3'
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    balance: {
        width: 100,
        height: 44,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    allMoneyText: {
        fontSize: 20,
        marginLeft: 15
    },
    balanceText: {
        fontSize: 20,
        color: 'white'
    },

});

export default connect(
    (state) => ({
        cart: state.sheet.cart,
        cartVisible: state.sheet.cartVisible,
    }),
    (dispatch) => ({
        closeCart: () => dispatch(closeCart()),
        toggleSelectAll: () => dispatch(toggleSelectAll()),
        deleteCart: () => dispatch(deleteCart()),
    })
)(Cart)
