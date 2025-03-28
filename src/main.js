import '@/styles/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { swiper } from '@/plugins/swiper'
import VueApexCharts from 'vue3-apexcharts'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Install Pinia before using stores
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(VueApexCharts)
app.use(swiper)
app.use(pinia)

app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
