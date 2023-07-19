import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './components/App.vue';
import router from './router';

const app = createApp(App)
app.use(router)
app.mount("#app");
