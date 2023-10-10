// import './assets/main.css'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp({
  setup () {
    // Nothing yet...
  },
  render: () => h(App)
})

// app.use(createMetaManager())

app.use(createPinia())

app.mount('#app')
