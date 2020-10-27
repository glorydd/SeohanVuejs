// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

const access_token = localStorage.access_token
store.commit('LOGIN', access_token)

export default store
