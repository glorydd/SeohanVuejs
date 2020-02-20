import axios from "axios";

var route = '';
class crudService {
  setRoute(sourceRoute) {
    route = sourceRoute;
  }

  getAllList(stat) {
    return axios.get('/api/' + route);
  }
  retrieve(id) {
    return axios.get('/api/' + route + '/' + id);
  }
  update(data) {
    return axios.put('/api/' + route + '/update', data);
  }
  save(data) {
    return axios.post('/api/' + route +'/save', data);
  }
  fileUpload(folderPath, data) {
    return axios.post('/api/file/upload'+ '/' +folderPath, data, {
      headers: {
        // encodeURI(param) headers: {
        'Content-Type': 'multipart/form-data',
        "Process-Data": false,
      }
    });
  }
  fileDown(data) {
    return axios.get('/api/file/' + data);
  }


  retrieveList(stat) {
    return axios.get('/api/' + route + '?stat=' + stat);
  }
  getListByAdgub(adgub) {
    return axios.get('/api/' + route + '?adgub=' + adgub);
  }
  getFact() {
    return axios.get('/api/' + route + '/fact');
  }
  getWrkctListByFact(factory) {
    return axios.get('/api/' + route + '/fact/' + factory);
  }
}

export default new crudService();
