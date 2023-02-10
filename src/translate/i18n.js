import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { messages } from './languages'

i18n
    //.use(LanguageDetector)
    .init({
        lng: 'pt-BR',
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'pt',
        ns: ['translations'],
        resources: messages
    })

export default i18n;