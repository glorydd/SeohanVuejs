import axios from 'axios'
import router from '../router'
import qs from 'qs'

const DOMAIN = 'http://localhost/api'

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

class httpService {
  setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  }

  onUnauthorized = () => {
    router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`)
    throw Error(response)
  }

  onForbidden = (response) => {
    alert('권한이 없습니다.')
    router.push('/')
    throw Error(response)
  }

  onBadRequest = (response) => {
    alert('잘못된요청입니다.')
    throw Error(response)
  }

  onNotFound = (response) => {
    alert('잘못된 접근입니다.')
    throw Error(response)
  }

  authRequest = (method, url, data) => {
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

  request = (method, url, data) => {
    return axios({
      method,
      url: DOMAIN + url,
      data,

    }).then(result => result)
      .catch(error => error.response)
  }

  export
  const
  requestFile = (method, url, data) => {
    return axios({
      method,
      url: DOMAIN + url,
      data,
      processData: false,
      contentType: false

    }).then(result => result)
      .catch(error => error.response)
  }

  auth = {
    login(playload) {
      return authRequest('post', '/oauth/token', playload)
    }
  }
}

export default new httpService();
