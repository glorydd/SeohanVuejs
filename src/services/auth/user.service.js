import axios from 'axios';
import authHeader from './auth-header';
import store from '@/store';

const API_URL = '/api/auth/';

class UserService {
  getUserContent() {
    let user = JSON.parse(localStorage.getItem('user')).data;
    return axios.post(API_URL + 'userinfo', user , { headers: authHeader()  });
  }
}

export default new UserService();
