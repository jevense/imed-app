import React, {Component} from 'react'
import {Image, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View,} from 'react-native'
import MineItemCell from './MineItemCell'
import {Avatar, Divider} from "react-native-elements"
import {connect} from "react-redux"
import {preLogin} from "../../actions/loginAction"

class MineScene extends Component<{}> {

    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false
        }
    }

    getDataList() {
        return [
            {
                data: [
                    {title: '阅点', subtitle: '立即充值', image: require('../../assets/pesion/zhu_img18.png')},
                    {title: '充值&消费记录', image: require('../../assets/pesion/zhu_img19.png')},
                    {title: '优惠券', image: require('../../assets/pesion/zhu_img20.png')},
                    {title: '验证码激活', image: require('../../assets/pesion/zhu_img23.png')},
                    {title: '修改密码', image: require('../../assets/pesion/zhu_img21.png')},
                ],
            },
            {
                data: [
                    {title: '设置', image: require('../../assets/pesion/zhu_img22.png')},
                ]
            }
        ]
    }

    onHeaderRefresh() {
        this.setState({isRefreshing: true});

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }

    renderCells() {
        return (
            <SectionList
                keyExtractor={(item) => item.title}
                renderItem={({item}) => (
                    <MineItemCell image={item.image}
                                  title={item.title}
                                  subtitle={item.subtitle}
                                  key={item.title}
                    />)}
                renderSectionHeader={({section}) => <View key={section.key} style={{height: 10}}/>}
                ItemSeparatorComponent={() => <Divider style={{height: 1, backgroundColor: '#F3F3F3'}}/>}
                sections={this.getDataList()}
            />
        )
    }

    renderHeader() {
        let {login} = this.props;
        return (
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Avatar
                        large
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        onPress={login}
                        activeOpacity={0.7}
                    />
                    <View>
                        <Text style={{fontSize: 20}}>书包用户</Text>
                        <Text style={{fontSize: 20}}>151100809676</Text>
                    </View>
                    <Image style={styles.arrow} source={require('../../assets/pesion/cell_arrow.png')}/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    {this.renderHeader()}
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    header: {
        paddingTop: 20,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 7,
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});


export default connect(
    (state) => ({}),
    (dispatch) => ({
        login: () => dispatch(preLogin()),
    })
)(MineScene)
