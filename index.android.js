/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import Root from './app/index'

// class Root extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <View>
//         <Text>dsadasdas</Text>
//       </View>
//     )
//   }
// }

AppRegistry.registerComponent('myapp', () => Root);
