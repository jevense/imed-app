import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'; // 1.0.0-beta.14

const HomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('Details')}
            title="Go to details"
        />
    </View>
);

const DetailsScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
    </View>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

export default RootNavigator;