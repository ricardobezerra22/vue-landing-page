// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'primeFitnessTheme',
    themes: {
      primeFitnessTheme: {
        dark: false,
        colors: {
          primary: '#6e8b3d',
          secondary: '#a0846c',
          background: '#f9f9f9',
          surface: '#ffffff',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        }
      }
    }
  }
})

export default vuetify
