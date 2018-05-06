import i18n from 'i18next'
import {ru} from './locales'

export const i18nConf = i18n.init({
    fallbackLng: 'ru',
    resources: {ru},
    debug: false,
    react: {
        wait: true
    }
})
