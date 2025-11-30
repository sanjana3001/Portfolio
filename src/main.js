import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/css/styles.css'

// Initialize EmailJS globally
import emailjs from '@emailjs/browser'
emailjs.init('yKYgOaI9zAhxBNUca')

createApp(App).use(router).mount('#app')