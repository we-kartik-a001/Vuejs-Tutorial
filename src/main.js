import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import Testing from './components/Testing.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('Testing', Testing);

app.mount('#app'); 

