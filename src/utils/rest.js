import axios from 'axios'

const setUpConfig = (config = {}) => {
    config.headers = config.headers ? config.headers : {}
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    return config
}

function resolve(response) {
    return response.status === 200 ? response : Promise.reject(response)
}

export const post = (url, data = {}) => {
    return axios.post(url, data, setUpConfig()).then(resolve)
}
