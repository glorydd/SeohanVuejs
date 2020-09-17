import httpService from '../../httpService';
import axios from "axios";


var route = '/mat/warehouse';

class matWmsService  {

  fetch() {
    return httpService.request('get', route)
  };
  fetchList(playload) {
    return axios.get('/api/' + route + "/params", data);
    // return httpService.request('get', route + `?page=${playload.page}&size=${playload.size}&sort=${playload.option},${playload.sort}`)
  };
  fetchByParams(data) {
    // return httpService.request('get', route + '/params', data)
    return axios.get('/api/' + route + "/params", data);
  };
  create(playload) {
    return httpService.request('post', route, playload)
  };
  put(playload) {
    return httpService.request('put', route, playload)
  };
  createFiles(playload) {
    return httpService.requestFile('post', route + '/files/${playload.accountId}', playload.formData);
  };
  fileDown(data) {
    return httpService.request('get', route + '/files' + data )
  }
}

export default new  matWmsService;
