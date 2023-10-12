// import './assets/main.css'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueGtag from 'vue-gtag'

const app = createApp({
  setup () {
    // Nothing yet...
  },
  render: () => h(App)
})

// app.use(createMetaManager())
app.use(createPinia())
app.config.productionTip = false
app.use(VueGtag, {
  config: { id: "AW-11357686843" }
});

app.mount('#app')
