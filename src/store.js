import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import throttle from 'lodash/throttle'

import {loadState, saveState} from './localStorage'

export function configureStore(rootReducer, history) {
    const persistedState = loadState()

    const enhancers = []
    const middleware = [thunk, promiseMiddleware(), routerMiddleware(history)]

    if (process.env.NODE_ENV === 'development') {
        enhancers.push(composeWithDevTools())
        middleware.push(logger)
    }

    const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
    const store = createStore(rootReducer, persistedState, composedEnhancers)

    store.subscribe(
        throttle(() => {
            saveState({tokens: store.getState().tokens})
        }, 1000)
    )

    return store
}
