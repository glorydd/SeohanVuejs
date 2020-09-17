import crudService from "../../crudService";

var route = 'base/code/';
class codeService {
  setRoute(route) {
    crudService.setRoute(route);
  }

  getAllList() {
    return crudService.getAllList(route);
  }

  getDataByParam(data) {
    return crudService.getDataByParam(route,data)
    // return axios.get('/api/' + route + "/params", data);
  }
  update(data) {
    return crudService.update(route,data);
    // axios.put('/api/' + route + '/update', data);
  }
  save(data) {
    return crudService.save(route,data);
    // axios.post('/api/' + route +'/save', data);
  }
  fileUpload(data) {
    return crudService.fileUpload(route,data);
  }
  fileDown(data) {
    return crudService.fileDown(route,data)
    // return axios.get('/api/' + route + '/download' + data, headerInfo);
  }
}

export default new codeService();
