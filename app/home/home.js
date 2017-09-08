import React, {Component} from 'react'
import {View, Text, Image,StyleSheet, StatusBar} from 'react-native'

export default class homeIndex extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <StatusBar />
                <View style={Style.navigator}></View>
                <Text>我是首页哦</Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {

    },
    navigator: {
        height: 44,
        backgroundColor: "#38ADFF"
    }
})