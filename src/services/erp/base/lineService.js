import crudService from "../../crudService";

var route = 'base/line';
class lineService {

  // 공통 외 추가사항
  getLine(data) {
    return crudService.getByPath(route + '/', data)
  }
  getLinesByFact(data) {
    return crudService.getByPath(route + '/fact/', data)
  }
}

export default new lineService();
