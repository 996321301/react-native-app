import React from 'react'
import {StackNavigator} from 'react-navigation'

import homePage from './home/index'

const MyRoutes = StackNavigator({
    Home: {
        screen: homePage,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Home'
})

export default MyRoutes