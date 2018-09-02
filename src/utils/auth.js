import _ from 'lodash'

export const isAuth = tokens => {
    if (_.isUndefined(tokens)) {
        return false
    }

    return !_.isUndefined(tokens.refreshToken)
}
