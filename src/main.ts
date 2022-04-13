import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import { router } from './router/router';
import { key, store } from './store';

createApp(App).use(router).use(store, key).mount('#app');
