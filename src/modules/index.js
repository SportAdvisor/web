import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {signUpReducer as signUp} from './signUp'

export default combineReducers({
    routing: routerReducer,
    signUp
})
