// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import 'bootstrap'
import VModal from 'vue-js-modal'
// import 'es6-promise/auto'

import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VeeValidate)
Vue.use(VModal, { dynamic: true })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  // template: '<App/>'
})
