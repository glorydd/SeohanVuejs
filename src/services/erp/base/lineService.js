import crudService from "../../crudService";

var route = 'base/line';
class dictionaryService {
  setRoute(route) {
    crudService.setRoute(route);
  }

  getAllList() {
    return crudService.getAllList(route);
  }
  getDataByParam(data) {
    return crudService.getDataByParam(route,data)
  }
  update(data) {
    return crudService.update(route,data);
  }
  save(data) {
    return crudService.save(route,data);
  }
  fileUpload(data) {
    return crudService.fileUpload(route,data);
  }
  fileDown(data) {
    return crudService.fileDown(route,data)
  }

  // 공통 외 추가사항
  getOne(data) {
    return crudService.getOne(route + '/', data)
  }
  getLinesByFact(data) {
    return crudService.getOne(route + '/fact/', data)
  }
}

export default new dictionaryService();
