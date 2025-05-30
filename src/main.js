import { createApp } from 'vue'
import App from './App.vue'  // <-- This imports App correctly
import './assets/main.css'

import {
  Counter,
  TemplateSyntax,
  ComputedComponent,
  ClassBindings,
  Practical,
  StyleComponent,
  ConditionalComponent,
  Listrendering,
  Practical2
} from './components'

const app = createApp(App)  // <-- Pass App here

// Register components globally
app.component('Counter', Counter)
app.component('TemplateSyntax', TemplateSyntax)
app.component('ComputedComponent', ComputedComponent)
app.component('ClassBindings', ClassBindings)
app.component('Practical', Practical)
app.component('StyleComponent', StyleComponent)
app.component('ConditionalComponent', ConditionalComponent)
app.component('Listrendering', Listrendering)
app.component('Practical2', Practical2)

app.mount('#app')
