import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import { createApp } from 'vue';
import App from './VueApp.vue';

createApp(App).mount('#vue-root');
console.log("webpack configured successfully!");
my();