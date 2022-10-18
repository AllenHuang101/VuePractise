import { createApp } from 'vue';
import router from './router';

import App from './App.vue';

// localStorage.setItem('token', '123456');
createApp(App).use(router).mount('#app');
