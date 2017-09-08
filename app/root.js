import React from 'react'
import {StackNavigator} from 'react-navigation'

import homePage from './home/index'

const MyRoutes = StackNavigator({
    Home: {screen: homePage}
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

export default MyRoutes