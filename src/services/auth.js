import axios from 'axios';
import router from '../router'
import qs from 'qs'
import {request, requestFile, onBadRequest,onForbidden,onUnauthorized,onNotFound} from './index'
import crudService from "./crudService";

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}
 

export default function authHeader () {
  let accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    return { Authorization: accessToken }
  } else {
    return false
  }
}

export const account = {

  login(playload) {
    return authRequest('post', '/oauth/token', playload)
  },
  fetch() {
    let accessToken = localStorage.getItem('access_token');
    return axios.get('/api/' + '/accounts')
      .catch(response => {
        throw Error(response)
      })
  },
  idCheck(playload) {
    return crudService.save('/accounts/join/check', playload)
  },
  createFiles(playload) { 
    return requestFile('post', `/accounts/files/${playload.accountId}`, playload.formData)
  },  
  currentUser() {
    return this.$store.state.auth.user;
  },
  
  isAuthenticated() {
    return this.$store.getters.isAuthenticated;
  },
}

export const authRequest = (method, url, data) => {
  return axios({
    headers: {
      'Authorization': 'Basic aWQ6c2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    url:  '/api' + url,
    data: qs.stringify(data)
  }).then(result => result)
    .catch(({response}) => {
      if (response.status === Unauthorized) return onUnauthorized()
      else if (response.status == Forbidden) return onForbidden(response)
      else if (response.status == BadRequest) return onBadRequest(response)
      else if (response.status == NotFound) return onNotFound(response)
      throw Error(response)
    })
}






