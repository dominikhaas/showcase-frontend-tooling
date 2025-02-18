import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n/i18n.ts'




createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
