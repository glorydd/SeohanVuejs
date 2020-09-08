import httpService from '../httpService';

var route = '/base/item';
class baseItemService  {
  fetch() {
    return request('get', route)
  };
  fetchByParams(params) {
    return request('get', route + 'params', params)
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

export default new baseItemService;
