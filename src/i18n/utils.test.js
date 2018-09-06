import {getAntdLocaleByI18nLanguage, handleChangeLanguage, locales} from './utils'
import {i18nInstance} from './i18n'

describe('i18n:utils', () => {
    const i18nRu = {language: 'ru-RU'}
    const i18nEn = {language: 'en-US'}

    const ruLocale = 'ru'

    test('should correctly return localization', () => {
        expect(getAntdLocaleByI18nLanguage(i18nRu)).toEqual(locales.ruRu)
        expect(getAntdLocaleByI18nLanguage(i18nEn)).toEqual(locales.enUs)
    })

    test('should correctly change current localization', () => {
        const i18n = i18nInstance
        handleChangeLanguage(ruLocale)
        expect(i18n.language).toEqual(ruLocale)
    })
})
