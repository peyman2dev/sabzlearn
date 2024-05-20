import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './english.js'
import persian from './persian.js'

const resources = {
    en: {
        translation: english
    },
    persian: {
        translation: persian
    },
}



i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "persian",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n