import React, {Component} from 'react'
import {Modal, StyleSheet} from 'react-native'
import {connect} from "react-redux"
import SearchNavigator from "./SearchNavigator"


class SearchComponent extends Component<{}> {

    render() {
        let {searchVisible} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={searchVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
            >
                <SearchNavigator/>
            </Modal>
        )
    }
}

export default connect(
    (state) => ({
        searchVisible: state.sheet.searchVisible,
    })
)(SearchComponent)

const styles = StyleSheet.create({
    btnDefaultStyle: {}
});
