import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false
import './assets/css/tailwind.scss'
// Socket IO Config
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
    debug:true,
    connection:io('http://localhost:9000')
}))

new Vue({
//   router,    
  render: h => h(App)
}).$mount('#app')
