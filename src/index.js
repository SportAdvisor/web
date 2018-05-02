import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import {configureStore} from './store'
import {App} from './containers/App'
import rootReducer from './modules'
import './index.scss'

export const history = createHistory()
export const store = configureStore(rootReducer, history)
const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    target
)
