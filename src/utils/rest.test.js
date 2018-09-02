import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import {setUpConfig, pathParamsFormatter, resolve, get, post} from './rest'

const nockBaseUrl = 'http://localhost:3000'
const succeedResponse = {code: 200, data: {}}
const failedResponse = {code: 500, data: {}}

describe('utils:rest', () => {
    describe('helpers', () => {
        describe('setupConfig', () => {
            const initialConfig = {headers: {test: 'test'}}
            const config = {headers: {'Content-Type': 'application/json; charset=utf-8'}}

            test('should return set up config', () => {
                expect(setUpConfig()).toEqual(config)
                expect(setUpConfig(initialConfig)).toEqual({
                    headers: {...initialConfig.headers, ...config.headers}
                })
            })
        })

        describe('pathParamsFormatter', () => {
            const rawUrl = 'user/:userId'
            const params = {userId: 1}
            const result = 'user/1'

            const rawMultiParamUrl = 'user/:userId/organizations/:organizationId'
            const multiParams = {userId: 1, organizationId: 2}
            const multiParamsResult = 'user/1/organizations/2'

            test('should return formatted url', () => {
                expect(pathParamsFormatter(rawUrl, params)).toBe(result)
                expect(pathParamsFormatter(rawMultiParamUrl, multiParams)).toBe(multiParamsResult)
            })

            test('should return original url', () => {
                expect(pathParamsFormatter(rawUrl)).toBe(rawUrl)
            })
        })

        describe('resolve', () => {
            test('should return data', () => {
                expect(resolve({data: succeedResponse})).toEqual({})
            })

            test('should through an error', () => {
                expect(resolve({data: failedResponse})).rejects.toEqual({data: failedResponse})
            })
        })
    })

    describe('get request', () => {
        beforeEach(() => {
            axios.defaults.baseURL = nockBaseUrl
            axios.defaults.adapter = httpAdapter
            nock.cleanAll()
        })

        test('should send get request and resolve with 200', () => {
            nock(nockBaseUrl)
                .get('/test')
                .reply(200, succeedResponse)

            get('test').catch(response => {
                expect(response.data).toBe(succeedResponse)
            })
        })
    })

    describe('post request', () => {
        beforeEach(() => {
            axios.defaults.baseURL = nockBaseUrl
            axios.defaults.adapter = httpAdapter
            nock.cleanAll()
        })

        test('should send post request and resolve with 200', () => {
            nock(nockBaseUrl)
                .post('/test')
                .reply(200, succeedResponse)

            post('test').catch(response => {
                expect(response.data).toBe(succeedResponse)
            })
        })
    })
})
