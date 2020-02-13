// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import 'bootstrap'

// import $ from 'jquery';
// import 'expose-loader?$!expose-loader?jQuery!jquery'


import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'


library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VeeValidate)
// Vue.use($)


Vue.component('font-awesome-icon', FontAwesomeIcon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  // template: '<App/>'
})
