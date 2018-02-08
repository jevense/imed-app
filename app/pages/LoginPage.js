import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, View} from "react-native";
import {login} from '../actions/loginAction'
import {Header} from "react-native-elements";

class LoginPage extends Component<{}> {

    static navigationOptions = ({navigation, screenProps, navigationOptions}) => {
        return {
            title: '登录',
            tabBarVisible: true,
        }
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     // 登录完成,切成功登录
    //     if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
    //         const resetAction = NavigationActions.reset({
    //             index: 0,
    //             actions: [
    //                 NavigationActions.navigate({routeName: 'Main'}),
    //             ]
    //         });
    //         // this.props.navigation.dispatch(resetAction);
    //         this.props.navigation.dispatch({type: 'Main'});
    //
    //         // nav.dispatch({ type: 'Login' })
    //
    //         console.log(this.props);
    //
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        let {auth,} = this.props;
        return (
            <View>
                <Header
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{text: '用户登录'}}
                    rightComponent={{text: '注册', color: '#fff'}}
                />
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Button title={'login'} onPress={auth}/>
                </View>
            </View>
        )
    }

}

export default connect(
    (state) => ({
        status: state.auth.status,
        isSuccess: state.auth.isSuccess,
        user: state.auth.user,
    }),
    (dispatch) => ({
        auth: () => dispatch(login()),
    })
)(LoginPage)
