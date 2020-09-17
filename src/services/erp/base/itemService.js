import httpService from '../../httpService';
import axios from "axios";

var route = '/base/item';
class itemService  {
  fetch() {
    return request('get', route)
  };
  fetchList(data) {
    return axios.get('/api/' + route + "/params", data);
    // return httpService.request('get', route + `?page=${playload.page}&size=${playload.size}&sort=${playload.option},${playload.sort}`)
  };
  fetchByParams(data) {
    // return request('get', route + '/params', params)
    return axios.get('/api/' + route + "/params", data);
  };
  create(playload) {
    return request('post', route, playload)
  };
  put(playload) {
    return request('put', route, playload)
  };
  createFiles(playload) {
    return requestFile('post', route + '/files/${playload.accountId}', playload.formData);
  };
  fileDown(data) {
    return request('get', route + '/files' + data )
  };
}

export default new itemService;
