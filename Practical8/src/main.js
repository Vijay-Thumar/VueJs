import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'
createApp(App).use(router).use(store).mount('#app')