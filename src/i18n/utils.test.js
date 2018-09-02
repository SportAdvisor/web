import {getAntdLocaleByI18nLanguage, locales} from './utils'

describe('i18n:utils', () => {
    const i18nRu = {language: 'ru-RU'}
    const i18nEn = {language: 'en-US'}

    test('should correctly return localization', () => {
        expect(getAntdLocaleByI18nLanguage(i18nRu)).toEqual(locales.ruRu)
        expect(getAntdLocaleByI18nLanguage(i18nEn)).toEqual(locales.enUs)
    })
})
