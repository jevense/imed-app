import React, {Component} from 'react'
import {Button, Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TopNavigation from '../Menu'
import {connect} from "react-redux";


class Store extends Component<{}> {

    // static navigationOptions = ({navigation, navigationOptions}) => {
    //     navigationOptions.tabBarVisible = true;
    //     return {
    //         headerLeft: <TouchableOpacity
    //             onPress={() => {
    //                 navigation.navigate('DrawerOpen')
    //             }}
    //         >
    //             <Image
    //                 source={require('../../assets/Profile_tabBar_Select_Image.png')}
    //                 style={styles.person}
    //             />
    //         </TouchableOpacity>,
    //         headerTitle: '书架',
    //         headerRight: <View style={{flexDirection: 'row'}}>
    //             <TouchableOpacity
    //                 style={{padding: 10}}
    //                 onPress={() => {
    //                     navigation.navigate('Search')
    //                 }}>
    //                 <Ionicons name='ios-search'
    //                           size={25}
    //                           style={{color: '#FC0D1B'}}
    //                 />
    //             </TouchableOpacity>
    //             <TopNavigation style={{padding: 10}}/>
    //         </View>,
    //     };
    // };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Seceond"
            />
        );
    }
}

export default connect()(Store)

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#000',
        shadowColor: '#0000ff',
        opacity: 0.6,
        shadowRadius: 3,
    },
});
