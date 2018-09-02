import {FULFILLED, PENDING, REJECTED} from 'redux-promise-middleware'
import {createAction} from 'redux-actions'
import typeToReducer from 'type-to-reducer'

export const asyncReducerMap = action => ({
    [action]: {
        PENDING: () => ({
            status: PENDING
        }),
        REJECTED: (state, action) => ({
            status: REJECTED,
            error: action.payload
        }),
        FULFILLED: (state, action) => ({
            status: FULFILLED,
            data: action.payload
        })
    }
})

export function fetchWrapper(name, httpFetcher) {
    const request = createAction(name)
    const reducerMap = asyncReducerMap(name)

    const defaultState = {
        data: null,
        status: 'INITIAL'
    }

    return {
        fetcher: data => {
            return dispatch => {
                return dispatch(request(httpFetcher(data)))
            }
        },
        reducer: typeToReducer(reducerMap, defaultState)
    }
}
