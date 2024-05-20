import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './english.js'
import persian from './persian.js'
const lng = localStorage.getItem('language') || "persian"

const resources = {
    english: {
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
        lng,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n