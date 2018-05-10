import React, {Component} from "react";
import {Dimensions, View,} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";
import Header from "./Header";
import Footer from "./Footer";
import WebView from '../../component/BookWebView'
import {SectionLocation, storage} from "../../storage";

let {width} = Dimensions.get('window');

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            pre: width / 3,
            next: width * 2 / 3,
        });
        this.getContent(this.props.bookId)
    }

    componentWillReceiveProps(nextProps) {
        this.getContent(nextProps)
    }

    getContent(bookId) {
        SectionLocation.load({
            key: 'SectionLocation',
            id: bookId,
        }).then(dataSource => {
            storage.load({
                key: 'section',
                id: dataSource.current,
                syncParams: {bookId,},
            }).then(dataSource => {
                this.setState({dataSource});
                // this.webView.postMessage(JSON.stringify(dataSource))
                console.log(JSON.stringify(dataSource))
            });
        }).catch(err => {
            console.log(err);
        });
    }

    onMessage = (message) => {
        console.log(message.nativeEvent.data)
        let {command, data} = JSON.parse(message.nativeEvent.data);
        switch (command) {
            case "test":
                console.log(data);
                break;
            case "got the message inside webview":
                console.log("we have got a message from webview! yeah");
                break;
        }
    }

    injectedJavaScript = () => {
        let {dataSource} = this.state;
        // const script = `vmroot.section = ${dataSource};console.log(JSON.stringify(${dataSource}))`;  // eslint-disable-line quotes
        const script = `console.log('=====')`;  // eslint-disable-line quotes
        this.webView.injectJavaScript(script);
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        let {pre, next, dataSource} = this.state;

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
                              if (timestamp - this.state.timestamp > 383) {//大于383ms
                                  // alert('sssss')
                              } else if (modalVisible || pageX > pre && pageX < next) {
                                  changeModalVisible(!modalVisible)
                              }
                          }
                      }}
                >
                    <WebView
                        domStorageEnabled={true}
                        ref={(ref) => this.webView = ref}
                        onMessage={this.onMessage}
                        javaScriptEnabled={true}
                        injectJavaScript={this.injectedJavaScript}
                        source={require('../../assets/html/index.html')}
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
