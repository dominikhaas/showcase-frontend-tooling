// src/locales/i18n.ts
import { createI18n } from 'vue-i18n'

import { languages } from '.'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n
