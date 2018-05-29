import {createAction, handleAction} from 'redux-actions'

export const SET_TOKENS = 'SET_TOKENS'

export const setTokens = createAction(SET_TOKENS, tokens => tokens)
export const tokensReducer = handleAction(
    SET_TOKENS,
    (state, action) => ({...state, ...action.payload.data}),
    {}
)
