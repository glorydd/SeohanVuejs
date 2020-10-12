import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import VModal from 'vue-js-modal'

// Vue.use(VModal, { dynamic: true })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App),
})
