import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        companyCode:user.companyCode,
         asabn: user.asabn,
        pass: user.pass
      })
      .then(this.handleResponse)
      .then(response => {
        if (response.headers.authorization) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('accessToken', response.headers.authorization);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  }
  getUserContent() {
    let user = JSON.parse(localStorage.getItem('user')).data;
    return axios.post(API_URL + 'userinfo', user , { headers: authHeader()  });
  }
  // register(user) {
  //   return axios.post(API_URL + 'signup', {
  //     username: user.username,
  //     email: user.email,
  //     password: user.password
  //   });
  // }

  handleResponse(response) {
    if (response.status === 401) {
      this.logout();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }
}

export default new AuthService();
