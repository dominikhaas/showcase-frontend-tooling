import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n/i18n.ts'
import { client } from './client/client.gen.ts'


client.setConfig({
  baseUrl: 'http://localhost:5173/api/',
})

client.interceptors.request.use((request) => {
  console.log('Running interceptor')
  const token = window.sessionStorage.getItem('token')
  if (token) {
    console.log('Adding token: ' + token)
    request.headers.set('Authorization', `Token ${token}`)
  }
  return request
})

createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
