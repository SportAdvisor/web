import _ from 'lodash'

export const makeErrorFieldsMap = (errors, values) =>
    _.reduce(
        errors,
        (result, key) => {
            let field = key.field

            result[field] = {
                value: values[field],
                errors: [new Error(key.msg)]
            }

            return result
        },
        {}
    )
