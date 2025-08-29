import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVueIcons } from 'bootstrap-vue'
import store from './store/store'
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})