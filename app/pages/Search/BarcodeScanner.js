import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {RNCamera} from 'react-native-camera'

class BarcodeScanner extends Component<{}> {

    static navigationOptions = ({navigation}) => {
        return {
            headerBackTitle: '返回',
            headerTitle: '扫描二维码',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    onBarCodeRead={() => (this.onBarCodeRead)}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </RNCamera>
            </View>
        );
    }

    onBarCodeRead(e) {
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

export default BarcodeScanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
