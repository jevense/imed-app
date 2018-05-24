import React from 'react'
import {StyleSheet} from 'react-native'
import HTMLView from 'react-native-htmlview'

export default class App extends React.Component {
    render() {
        const htmlContent = `<html><body><h1>普通文本</h1></body></html>`;

        return (
            <HTMLView
                value={htmlContent}
                stylesheet={styles}
            />
        );
    }
}

const styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
});
