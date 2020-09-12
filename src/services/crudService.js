import axios from "axios";

var baseRoute = '';
var headerInfo = '';
class crudService {

  setConfig(sourceRoute) {
    baseRoute = sourceRoute;

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
  // setRoute(sourceRoute) {
  //   route = sourceRoute;
  // }


  getAllList(route) {
    return axios.get('/api/' + route, headerInfo);
  }
  getDataByParam(route, data) {
    return axios.get('/api/' + route + "/params", data);
  }
  update(route, data) {
    return axios.put('/api/' + route , data, headerInfo);
  }
  save(route, data) {
    return axios.post('/api/' + route , data, headerInfo);
  }

  fileUpload(route, data) {
    return axios.post('/api/' + route + '/files', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Process-Data": false,
        'Authorized': ''
      }
    });
  }
  fileDown(route, data) {
    return axios.get('/api/' + route + '/download' + data);
  }
}

export default new crudService();
