// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import state from './state'
import mutations from './mutations'
import actions from './actions' 

Vue.use(Vuex)

const resourceHost = '/api'

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

// const enhanceAccessToeken = () => {
//   const {accessToken} = localStorage
//   if (!accessToken) return
//   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
// }
// enhanceAccessToeken()
 
const access_token = localStorage.access_token
store.commit('LOGIN', access_token)

export default store