import {post} from '../utils/rest'

const SIGN_UP = 'SIGN_UP'

export const signUp = data => ({
    type: SIGN_UP,
    payload: post('/users/sign-up', data)
})
