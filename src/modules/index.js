import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {signUpReducer as signUp} from './signUp'
import {tokensReducer as tokens} from './auth'

export default combineReducers({
    routing: routerReducer,
    tokens,
    signUp
})
