import 'ress'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import BasicGeometries from './pages/BasicGeometries.vue'
import CSS3D from './pages/CSS3D.vue'

const app = createApp(App)
const router =  createRouter({
  history: createWebHashHistory('/threes'),
  routes: [
    { path: '/', component: Index },
    { path: '/basic-geometries', component: BasicGeometries },
    { path: '/css3d', component: CSS3D }
  ]
})

app.use(router)

app.mount('#app')
