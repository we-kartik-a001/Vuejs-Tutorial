import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassBindings from './components/ClassBindings.vue';
import Practical from './components/Practical.vue';
import StyleComponent from './components/StyleComponent.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassBindings', ClassBindings);
app.component('Practical', Practical);
app.component('StyleComponent', StyleComponent);

app.mount('#app'); 

