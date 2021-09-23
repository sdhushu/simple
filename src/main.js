import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

const app = createApp(App)
app.directive('active', {
    mounted(el) {
        el.classList.add('button')
    }
})

app.directive('water', {
    mounted(el) {
        el.classList.add('water')
    }
})


app.mount('#app')
