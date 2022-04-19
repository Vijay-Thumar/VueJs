import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


import NavagationBar from "./components/NavagationBar";

createApp(App).component("top-navagation", NavagationBar).mount("#app");