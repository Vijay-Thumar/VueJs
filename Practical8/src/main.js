import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'
import Toaster from '@meforma/vue-toaster';

createApp(App)
.use(Toaster)
.use(router)
.use(store)
.mount('#app')