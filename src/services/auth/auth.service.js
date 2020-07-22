import axios from 'axios';

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
}

export default new AuthService();
