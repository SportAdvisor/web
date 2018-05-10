import _ from 'lodash'
import ruRu from 'antd/lib/locale-provider/ru_RU'
import enUs from 'antd/lib/locale-provider/en_US'

const locales = {ruRu, enUs}

export const antdLocaleDetect = i18n => {
    return locales[_.camelCase(i18n.language)]
}
