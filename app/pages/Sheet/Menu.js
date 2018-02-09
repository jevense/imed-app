import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Menu, {MenuOption, MenuOptions, MenuTrigger} from 'react-native-menu';
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {view} from "../../actions/sheetAction";

const TopNavigation = ({style, isList, changeView}) => (
    <View style={style}>
        <Menu onSelect={(value) => changeView(value)}>
            <MenuTrigger>
                <Ionicons name='ios-menu'
                          size={25}
                          style={{color: '#FC0D1B'}}
                />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption value={'bookAdd'}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='ios-add-circle-outline'
                                  size={25}
                                  style={styles.itemIcon}
                        />
                        <Text style={styles.itemText}>增加图书</Text>
                    </View>

                </MenuOption>
                <MenuOption value={isList ? 'grid' : 'list'}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name={isList ? 'ios-keypad-outline' : 'ios-list-box-outline'}
                                  size={25}
                                  style={styles.itemIcon}
                        />
                        <Text style={styles.itemText}>
                            {isList ? '封面模式' : '列表模式'}
                        </Text>
                    </View>
                </MenuOption>
                <MenuOption value={1}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='ios-build-outline'
                                  size={25}
                                  style={styles.itemIcon}
                        />
                        <Text style={styles.itemText}>编辑书架</Text>
                    </View>
                </MenuOption>
            </MenuOptions>
        </Menu>
    </View>
);

const styles = StyleSheet.create({
    itemText: {
        padding: 5,
        paddingHorizontal: 10,
    },
    itemIcon: {
        color: '#FC0D1B',
    },
});


export default connect(
    (state) => ({
        isList: state.sheet.isList,
    }),
    (dispatch) => ({
        changeView: (value) => dispatch(view(value)),
    })
)(TopNavigation);


