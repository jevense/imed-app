import React from 'react'
import {Text, View} from 'react-native';
import Menu, {MenuContext, MenuOption, MenuOptions, MenuTrigger} from 'react-native-menu';
import Ionicons from "react-native-vector-icons/Ionicons";

const TopNavigation = (props) => (
    <View {...props}>
        <MenuContext style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
                    <MenuTrigger>
                        <Ionicons name='ios-menu'
                                  size={25}
                                  style={{color: '#FC0D1B'}}
                        />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value={1}>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name='ios-add-circle-outline'
                                          size={25}
                                          style={{color: '#FC0D1B'}}
                                />
                                <Text style={{padding: 5, paddingHorizontal: 10}}>增加图书</Text>
                            </View>

                        </MenuOption>
                        <MenuOption value={2}>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name='ios-list-box-outline'
                                          size={25}
                                          style={{color: '#FC0D1B'}}
                                />
                                <Text style={{padding: 5, paddingHorizontal: 10}}>列表模式</Text>
                            </View>
                        </MenuOption>
                        <MenuOption value={3}>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name='ios-keypad-outline'
                                          size={25}
                                          style={{color: '#FC0D1B'}}
                                />
                                <Text style={{padding: 5, paddingHorizontal: 10}}>封面模式</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        </MenuContext>
    </View>
);

export default TopNavigation;
