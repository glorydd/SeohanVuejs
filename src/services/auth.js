import axios from 'axios';
import router from '../router'
import qs from 'qs'
import {request, requestFile, onBadRequest,onForbidden,onUnauthorized,onNotFound} from './index'

// const API_URL = '/api/auth/';
const DOMAIN = 'http://localhost/api'
const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export default function authHeader () {
  let accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return { Authorization: accessToken }
  } else {
    return false
  }
}


export const account = {
  fetch() {
    return request('get', '/accounts')
  },
  create(playload) {
    return request('post', '/accounts', playload)
  },
  put(playload) {
    return request('put', '/accounts', playload)
  },
  fetchManager(playload) {
    return request('get', `/accounts/manager?page=${playload.page}&size=10&sort=id,DESC`)
  },
  fetchManagerSearch(playload) {
    return request('get', `/accounts/manager/${playload.option}/${playload.keyword}?page=${playload.page}&size=10&sort=id,DESC`)
  },
  idCheck(playload) {
    return request('post', '/accounts/join/check', playload)
  },
  createFiles(playload) {
    return requestFile('post', `/accounts/files/${playload.accountId}`, playload.formData)
  }
}


export const auth = {
  login(playload) {
    return authRequest('post', '/oauth/token', playload)
  }
}


const authRequest = (method, url, data) => {
  return axios({
    headers: {
      'Authorization': 'Basic aWQ6c2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    url: DOMAIN + url,
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






