import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import WatchComponent from './components/WatchComponent.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('WatchComponent', WatchComponent);

app.mount('#app'); 

