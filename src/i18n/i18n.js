import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {reactI18nextModule} from 'react-i18next'

const i18nextOptions = {
    fallbackLng: ['ru', 'en'],
    load: 'languageOnly',
    debug: true,
    react: {
        wait: true
    }
}

export const i18nInstance = i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init(i18nextOptions)
