import _ from 'lodash'
import ruRu from 'antd/lib/locale-provider/ru_RU'
import enUs from 'antd/lib/locale-provider/en_US'

import {i18nInstance} from './i18n'

export const locales = {ruRu, enUs}
export const getAntdLocaleByI18nLanguage = i18n => locales[_.camelCase(i18n.language)]
export const handleChangeLanguage = language => i18nInstance.changeLanguage(language)
