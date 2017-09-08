import React, {Component}  from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './root'
import reducers from './state/reducers/'

const store = createStore(reducers);

export default class homeIndex extends Component{
    render(){
        return(
            <Provider store={store} >
                <App />
            </Provider>
        )
    }
}