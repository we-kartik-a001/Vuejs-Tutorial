import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassBindings from './components/ClassBindings.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassBindings', ClassBindings);

app.mount('#app'); 

