import React, {Component} from "react";
import {Dimensions, PanResponder, ScrollView, StatusBar, Text, View, WebView,} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";
import Header from "./Header";
import Footer from "./Footer";

let {width} = Dimensions.get('window');

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // let {modalVisible, changeModalVisible,} = this.props;
        // this.panResponder = PanResponder.create({
        //     onPanResponderGrant: (evt, gestureState) => {
        //         console.log('onPanResponderGrant...');
        //     }
        // });

        this.setState({
            pre: width / 3,
            next: width * 2 / 3,
        })
    }

    onMessage = (message) => {
        switch (message.nativeEvent.data) {
            case "hello from webview":
                this.webView.postMessage("hello from react-native");
                break;
            case "got the message inside webview":
                console.log("we have got a message from webview! yeah");
                break;
        }
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        let {pre, next} = this.state;

        const injectScript = `
          !function () {
            //document.documentElement.style.webkitUserSelect='none'
            //document.documentElement.style.webkitTouchCallout='none'
            window.document.addEventListener('message', function (e) {
                const message = e.data
                if (message === "hello from react-native") {
                  window.postMessage("got the message inside webview");
                }
            })
            window.postMessage("hello from webview");
          }();
        `;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}
                      onStartShouldSetResponder={(evt) => {
                          let {pageX, pageY, timestamp,} = evt.nativeEvent;
                          this.setState({pageX, pageY, timestamp});
                          return true;
                      }}
                      onResponderRelease={(evt) => {
                          let {pageX, pageY, timestamp,} = evt.nativeEvent;
                          if (this.state.pageX === pageX && this.state.pageY === pageY) {
                              console.log(timestamp - this.state.timestamp)
                              if (timestamp - this.state.timestamp > 383) {//大于383ms
                                  alert('sssss')
                              } else if (modalVisible || pageX > pre && pageX < next) {
                                  changeModalVisible(!modalVisible)
                              }
                          }
                      }}
                >
                    <WebView
                        ref={(ref) => this.webView = ref}
                        onMessage={this.onMessage}
                        javaScriptEnabled={true}
                        injectedJavaScript={injectScript}
                        source={require('../../assets/html/TestH.html')}
                    />
                </View>
                {
                    modalVisible && (<Header {...{navigation,}}/>)
                }
                {
                    modalVisible && <Footer {...{navigation, drawer,}}/>
                }
            </View>
        )
    }
}

export default connect(
    (state) => ({
        modalVisible: state.reader.modalVisible
    }),
    (dispatch) => ({
        changeModalVisible: (value) => dispatch(changeModalVisible(value)),
    })
)(Content)
