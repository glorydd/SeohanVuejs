// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { auth } from './auth.module'

Vue.use(Vuex)

const resourceHost = '/api'

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken()

export default new Vuex.Store({
  modules:{
    auth
  }
})
