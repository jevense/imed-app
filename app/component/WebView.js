import React, {Component} from "react";
import {Text, View, WebView} from "react-native";


export default class WebViewCom extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                source={{uri: 'https://www.baidu.com'}}
                style={{width: '100%', height: '100%'}}
            />
        );
    }

}
