import configureStore from 'redux-mock-store'
import {loadState, saveState} from './localStorage'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('utils:localStorage', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const state = store.getState()

    beforeEach(() => {
        localStorage.clear()
    })

    describe('save state to localStorage', () => {
        test('should save to localStorage', () => {
            saveState(store)
            expect(localStorage.setItem).toHaveBeenLastCalledWith('state', JSON.stringify(state))
            expect(localStorage.__STORE__['state']).toBe(JSON.stringify(state))
            expect(Object.keys(localStorage.__STORE__).length).toBe(1)
        })
    })

    describe('load state from localStorage', () => {
        test('should load state from localStorage', () => {
            saveState(store)
            const loadedState = loadState()
            expect(localStorage.getItem).toHaveBeenLastCalledWith('state')
            expect(loadedState).toEqual(state)
        })

        test('should return an undefined when store is null', () => {
            expect(loadState()).toEqual(undefined)
        })

        test('should return an undefined when catching an error', () => {
            localStorage.getItem.mockImplementationOnce(() => {
                throw new Error('error')
            })
            expect(loadState()).toEqual(undefined)
        })
    })
})
