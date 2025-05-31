import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import FormInput from './components/FormInput.vue';
import WatchComponent from './components/WatchComponent.vue';
import WatchEffect from './components/WatchEffect.vue';
import Practice from './components/Practice.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('FormInput', FormInput);
app.component('WatchComponent', WatchComponent);
app.component('WatchEffect', WatchEffect);
app.component('Practice', Practice);

app.mount('#app'); 

