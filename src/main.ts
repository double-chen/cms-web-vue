import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import initLocalMock from './api/mock'

if (import.meta.env.VITE_APP_USE_MOCK === 'true') {
  initLocalMock()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
