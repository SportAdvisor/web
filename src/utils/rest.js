import _ from 'lodash'
import axios from 'axios'

export const setUpConfig = (config = {}) => {
    config.headers = config.headers ? config.headers : {}
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    return config
}

export const pathParamsFormatter = (url, params) => {
    return params
        ? _.reduce(params, (resultUrl, value, key) => _.replace(resultUrl, `:${key}`, value), url)
        : url
}

export const resolve = response => {
    return response.data.code === 200 ? response.data.data : Promise.reject(response)
}

export const post = (url, data = {}) => axios.post(url, data, setUpConfig()).then(resolve)

export const get = (url, params) =>
    axios.get(pathParamsFormatter(url, params), setUpConfig()).then(resolve)
