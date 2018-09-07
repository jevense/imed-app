import React, {Component} from 'react';
import {Share, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class ShareDemo extends Component {
    constructor(props) {
        super(props);
        this._shareMessage = this._shareMessage.bind(this);
        this._shareText = this._shareText.bind(this);
        this._showResult = this._showResult.bind(this);
        this.state = {
            result: ''
        };
    }

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareMessage}>
                    <View style={styles.button}>
                        <Text>点击分享文本</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareText}>
                    <View style={styles.button}>
                        <Text>点击分享文本,URL和标题</Text>
                    </View>
                </TouchableHighlight>
                <Text>{this.state.result}</Text>
            </View>
        );
    }

    _shareMessage() {
        Share.share({
            message: '我是被分享的本文信息'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _shareText() {
        Share.share({
            message: '我是被分享的本文信息',
            url: 'http://www.lcode.org',
            title: 'React Native'
        }, {
            dialogTitle: '分享博客地址',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});
