import axios from "axios";

var route = '';
var headerInfo = '';
class crudService {

  setConfig(sourceRoute) {
    route = sourceRoute;

    UserService.getUserContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content = error.response.data.message;
      }
    )

    // headerInfo = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorized':''
    //   }
    // }
  }
  setRoute(sourceRoute) {
    route = sourceRoute;
  }
  update(data) {
    return axios.put('/api/' + route + '/', data, headerInfo);
  }
  save(data) {
    return axios.post('/api/' + route + '/save', data, headerInfo);
  }


  fileUpload(folderPath, data) {
    return axios.post('/api/file/upload' + '/' + folderPath, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Process-Data": false,
        'Authorized': ''
      }
    });
  }
  fileDown(data) {
    return axios.get('/api/file/' + data, headerInfo);
  }


  getAllList(stat) {
    return axios.get('/api/' + route, headerInfo);
  }
  retrieve(id) {
    return axios.get('/api/' + route + '/' + id, headerInfo);
  }
  retrieveListByUserId(userId) {
    return axios.get('/api/' + roumoveLocationte + '/userid?userid=' + userId);
  }
  retrieveListByStat(stat) {
    return axios.get('/api/' + route + '/stat?stat=' + stat);
  }
  retrieveList() {
    return axios.get('/api/' + route);
  }
  getDataByParam(data) {
    return axios.get('/api/' + route + "/params", data
    //   {
    //   params: {
    //     warhs: data.params.warhs,
    //     itmno: data.params.itmno,
    //     cstcd: '',
    //     dscrp: '',
    //     cusna: ''
    //   }
    // }
    )
    //
    // return axios.post('/api/' + route + "/search", {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }, data
    // });
    // {params : { warhs : data.warhs, itmno : data.itmno }}
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
