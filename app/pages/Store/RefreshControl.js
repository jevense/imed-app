import {FlatList, RefreshControl, Text} from "react-native"
import React from "react"

class RefreshableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        fetch('https://www.baidu.com').then(() => {
            this.setState({refreshing: false});
        });
    }

    render() {
        return (
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem={
                            <Text>Text</Text>
                        }
                    />
                }
            />
        );
    }
}
