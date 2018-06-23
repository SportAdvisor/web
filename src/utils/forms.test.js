import {makeErrorFieldsMap} from './forms'

describe('utils:form suit', () => {
    const values = {email: 'a@a.aa', password: 'pcwd', name: 'Username', EULA: true}
    const errors = [
        {
            field: 'password',
            msg: 'password error msg'
        }
    ]
    const errorFieldsMap = {
        password: {
            errors: [new Error('password error msg')],
            value: 'pcwd'
        }
    }

    test('should make an errorFieldsMap from errors giving from BE side and form values', () => {
        expect(makeErrorFieldsMap(errors, values)).toEqual(errorFieldsMap)
    })
})
