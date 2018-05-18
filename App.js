import React from 'react';
import {FlatList, Text, View,Dimensions} from 'react-native';
import Post from './components/post';
import Expo, {AppLoading, Font} from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './features/home';
import PostScreen from './features/post';

let {height, width} = Dimensions.get('window');

const Navigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Post: {
        screen: PostScreen
    }
});

export default class App extends React.Component {

    state = {
        loading: false
    };

    cacheFonts(fonts) {
        return fonts.map(font => Font.loadAsync(font));
    }

    async loadAssets() {
        const fontAssets = this.cacheFonts([FontAwesome.font]);

        await Promise.all([...fontAssets]);
    }

    render() {

        const { loading } = this.state;

        if (loading) {
            return (
                <AppLoading
                    startAsync={this.loadAssets.bind(this)}
                    onFinish={() => this.setState({ loading: false })}
                />
            );
        }

        return (
            <Navigator />
        );
    }
}


EStyleSheet.build({
    $primaryColor: '#0275d8',
    $rem: (width / 375) * 16
});

const styles = EStyleSheet.create({
    header: {
        paddingTop: Expo.Constants.statusBarHeight
    }
});


