import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
// import axios
import axios from 'axios'

// set a prototype for http
// createApp.prototype.$http = axios;

// createApp(App).mount('#app')
createApp(App).use(VueAxios, axios).mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
//
// // import axios
// import axios from 'axios'
//
// // set a prototype for http
// Vue.prototype.$http = axios;
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
