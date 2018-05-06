import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {I18nextProvider} from 'react-i18next'
import {LocaleProvider} from 'antd'
import ruRU from 'antd/lib/locale-provider/ru_RU'

import {i18nConf} from './i18n'
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
            <LocaleProvider locale={ruRU}>
                <I18nextProvider i18n={i18nConf}>
                    <App />
                </I18nextProvider>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>,
    target
)
