/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './app/root'
//为了一套代码两端公用，统一入口
AppRegistry.registerComponent('myapp', () => Root);
