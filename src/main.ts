import 'ress'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import BasicGeometries from './pages/BasicGeometries.vue'

const app = createApp(App)
const router =  createRouter({
  history: createWebHashHistory('/threes'),
  routes: [
    { path: '/', component: Index },
    { path: '/basic-geometries', component: BasicGeometries }
  ]
})

app.use(router)

app.mount('#app')
