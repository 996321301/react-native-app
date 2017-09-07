import React, {Component} from 'react'
import {TabNavigator} from 'react-navigation'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Home from './home'
import User from './user'

const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("../resource/icons/account.png")}
                    style={[tabBarIcon, {tintColor: tintColor}]}
                />
            ),
        },
    },
    User: {
        screen: User,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("../resource/icons/account.png")}
                    style={[tabBarIcon, {tintColor: tintColor}]}
                />
            ),
        },
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    tabBarOptions: {
        style: {
            height:49,
            backgroundColor: 'white',
            borderTopColor: "#dddddd",
            borderStyle: 'solid',
            borderTopWidth: 1
        },
        activeTintColor:'#4ECBFC',
        // inactiveBackgroundColor:'white',
        inactiveTintColor:'#999'
    }
});

export default MyTab