import React, {Component} from 'react'
import {TabNavigator} from 'react-navigation'
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native'
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
                    style={{width: 20, height: 20, tintColor: tintColor}}
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
                    source={require("../resource/icons/all.png")}
                    style={{width: 20, height: 20, tintColor: tintColor}}
                />
            ),
        },
    }
}, {
    lazy: true,
    tabBarPosition: 'bottom',
    animationEnabled:true,
    tabBarOptions: {
        style: {
            height:49,
            backgroundColor: 'white',
            borderTopColor: "#dddddd",
            borderStyle: 'solid',
            borderTopWidth: 1,
        },
        labelStyle: {
            fontSize: 12,
            marginTop: 0
        },
        indicatorStyle: {
            height: 0
        },
        showIcon: true,
        activeTintColor:'#4ECBFC',
        // inactiveBackgroundColor:'white',
        inactiveTintColor:'#999',
        pressColor: "#aaaaaa"
    }
});

export default MyTab