import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal.ts'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.directive('reveal', vReveal)
app.use(router)
app.mount('#app')

import('./script.js')
