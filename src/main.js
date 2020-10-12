import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import VModal from 'vue-js-modal'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
// Vue.use(VModal, { dynamic: true })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  render: h => h(App),
})
