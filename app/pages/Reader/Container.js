import React, {Component} from "react";
import {
    PanResponder,
    ScrollView,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    WebView,
} from "react-native";
import {connect} from "react-redux";
import {changeModalVisible} from "../../actions/readerAction";
import Header from "./Header";
import Footer from "./Footer";
import WebViewBridge from "react-native-webviewbridge";

class Content extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let {modalVisible, changeModalVisible,} = this.props;
        this.panResponder = PanResponder.create({
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            // onPanResponderGrant: () => {
            //     this._top = this.state.top;
            //     this._left = this.state.left;
            //     this.setState({bg: 'red'})
            // },
            // onPanResponderMove: (evt, gs) => {
            //     console.log(gs.dx + ' ' + gs.dy)
            //     this.setState({
            //         top: this._top + gs.dy,
            //         left: this._left + gs.dx
            //     })
            // },
            onResponderEnd: (evt, gestureState) => {
                changeModalVisible(!modalVisible);
            }
        })
    }

    render() {
        let {navigation, drawer, modalVisible, changeModalVisible,} = this.props;
        let panResponder = this.panResponder;
        return (
            <View style={{flex: 1}}>
                {/*<Menu {...{drawer, modalVisible, changeModalVisible, navigation,}}/>*/}
                <View style={{flex: 1}}
                      onStartShouldSetResponder={() => true}
                      onResponderEnd={(evt, gestureState) => changeModalVisible(!modalVisible)}>
                    <WebView
                        // ref={webview => this.WebViewBridge = webview}
                        // onMessage={this.onMessage}
                        // autoHeight={false}//如果使用自动高度
                        source={{uri: 'https://www.baidu.com'}}
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
