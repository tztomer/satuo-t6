import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/styles.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'



const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAopS6SI7oP3X0FuYHfJb_K8nEmU5jQbmI',
    },
})

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
