import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
Vue.use(BootstrapVue);

library.add(faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
