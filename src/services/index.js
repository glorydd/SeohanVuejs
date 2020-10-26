import axios from 'axios'
import router from '../router'
import qs from 'qs'
import {authRequest} from '@/services/auth'


const DOMAIN = '/api'

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`)
  throw Error(response)
}
export const onForbidden = (response) => {
  alert('권한이 없습니다.')
  router.push('/')
  throw Error(response)
}

export const onBadRequest = (response) => {
  alert('잘못된요청입니다.')
  throw Error(response)
}

export  const onNotFound = (response) => {
  alert('잘못된 접근입니다.')
  throw Error(response)
}

export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,

  }).then(result => result)
    .catch(error => error.response)
}

export const requestFile = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    processData: false,
    contentType: false
  }).then(result => result)
    .catch(error => error.response)
}
    

export const mail = {
  mailSend(playload) {
    return request('post', '/api/mails', {title: playload.title, content: playload.content})
  },
}



