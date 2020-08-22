import axios from 'axios';
// import authHeader from './auth-header';
import qs from 'qs'

const API_URL = '/api/auth/';
const DOMAIN = 'http://localhost/api'
const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

class Auth {
  // login(user) {
  //   return axios
  //     .post(API_URL + 'signin', {
  //       companyCode:user.companyCode,
  //        asabn: user.asabn,
  //       pass: user.pass
  //     })
  //     .then(this.handleResponse)
  //     .then(response => {
  //       if (response.headers.authorization) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //         localStorage.setItem('accessToken', response.headers.authorization);
  //       }

  //       return response.data;
  //     });
  // }
  login(playload) {
    return authRequest('post', '/oauth/token', playload)
  }
  
  getUserContent() {
    let member = JSON.parse(localStorage.getItem('user')); 
    return axios.post(API_URL + 'userinfo', member , { headers: authHeader()  });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  } 
  handleResponse(response) {
    if (response.status === 401) {
      this.logout();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }
  authHeader () {
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      return { Authorization: accessToken }
    } else {
      return false
    }
  }
}

export default new Auth()





const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`)
  throw Error(response)
}
const onForbidden = (response) => {
  alert('권한이 없습니다.')
  router.push('/')
  throw Error(response)
}

const onBadRequest = (response) => {
  alert('잘못된요청입니다.')
  throw Error(response)
}

const onNotFound = (response) => {
  alert('잘못된 접근입니다.')
  throw Error(response)
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






