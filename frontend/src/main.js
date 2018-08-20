import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.use(Vuex)
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})