import moment from 'moment'
import {isAuth} from './auth'

const tokens = {
    token: 'token',
    refreshToken: 'refreshToken',
    expireAt: moment()
}

const invalidToken = {}

describe('utils:auth', () => {
    test('should return true when there is refresh token in cookies', () => {
        expect(isAuth(tokens)).toEqual(true)
    })

    test('should return false when there is no refresh token in cookies', () => {
        expect(isAuth(undefined)).toEqual(false)
        expect(isAuth(invalidToken)).toEqual(false)
    })
})
