import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {I18nextProvider} from 'react-i18next'

import {i18nConf} from './i18n/'
import {configureStore} from './store'
import {App} from './containers/App'
import rootReducer from './modules'

export const history = createHistory()
export const store = configureStore(rootReducer, history)
const target = document.querySelector('#root')

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <I18nextProvider i18n={i18nConf}>
                        <App />
                    </I18nextProvider>
                </ConnectedRouter>
            </Provider>
        )
    }
}

render(<Root />, target)
