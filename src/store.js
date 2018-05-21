import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

export function configureStore(rootReducer, history, initialState = {}) {
    const enhancers = []
    const middleware = [thunk, promiseMiddleware(), routerMiddleware(history)]

    if (process.env.NODE_ENV === 'development') {
        enhancers.push(composeWithDevTools())
        middleware.push(logger)
    }

    const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
    return createStore(rootReducer, initialState, composedEnhancers)
}
