import React, {Component} from 'react'
import {Modal, StatusBar, StyleSheet,} from 'react-native'
import Drawer from "react-native-drawer";
import {connect} from "react-redux";
import Container from "./Container";
import Side from "./Side";
import {storage} from "../../storage";


class Reader extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    };

    componentWillReceiveProps(nextProps) {
        let {bookId} = nextProps;
        // fetch(`http://192.168.8.144:8080/imed/book/${bookId}/chapter.json`)
        //     .then((response) => response.json())
        //     .then((jsondata) => {
        //         this.setState({bookName: jsondata['chapters']['name']});
        //         let dataSource = jsondata['chapters']['chapters'].map(item => {
        //             let {id = "", name: title = "", icon = "", sections: data = []} = item;
        //             return {id, title, data,}
        //         });
        //         // this.setState({dataSource});
        //     });

        storage.load({
            key: 'chapter',
            id: bookId,
        }).then(dataSource => {
            this.setState({
                dataSource,
            });
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        let {navigation, readerOpened, bookId,} = this.props;
        let dataSource = this.state.dataSource;
        return (
            <Modal
                animationType={"fade"}
                visible={readerOpened}
                onRequestClose={() => {
                    // alert("Modal has been closed.")
                }}
            >
                <Drawer
                    acceptPan={false}
                    openDrawerOffset={100}
                    tapToClose={true}
                    ref={(ref) => this.drawer = ref}
                    content={<Side {...{dataSource}}/>}
                >
                    <Container {...{navigation, bookId,}}
                               drawer={() => (this.drawer)}
                    />
                </Drawer>
                <StatusBar hidden translucent={false}/>
            </Modal>
        )
    }
}

export default connect(
    (state) => ({
        readerOpened: state.reader.readerOpened,
        bookId: state.reader.bookId,
    })
)(Reader)

const styles = StyleSheet.create({});
