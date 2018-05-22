import {fetchWrapper} from './common'
import {post} from '../utils/rest'

const SIGN_UP = 'SIGN_UP'

const SignUp = fetchWrapper(SIGN_UP, post.bind(null, '/users/sign-up'))
export const signUp = SignUp.fetcher
export const signUpReducer = SignUp.reducer
