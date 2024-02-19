import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {createPinia} from 'pinia';

import {createApp} from 'vue';

import App from './App.vue';
import './assets/global.css';
import router from './router/router.js';

const app = createApp(App);


app.use(createPinia());
app.use(router);

app.mount('#app');