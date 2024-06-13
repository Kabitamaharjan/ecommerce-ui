import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

// import axiosInstance from './axios';

window.axios = require('axios')

// const app = createApp(App);
// app.mount('#app');

createApp(App).use(router).mount('#app')
