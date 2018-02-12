import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import Pdf from 'react-native-pdf';


// https://github.com/wonday/react-native-pdf
export default class PDFExample extends Component<{}> {
    render() {
        // const source = {uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};
        const source = require('../../assets/pdf/seven.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});
