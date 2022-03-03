import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { store } from './store'
import './assets/index.postcss'

const head = createHead()
const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')
