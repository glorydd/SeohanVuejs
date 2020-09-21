import crudService from "../../crudService";

var route = 'base/line';
class lineService {

  // 공통 외 추가사항
  getOne(data) {
    return crudService.getOne(route + '/', data)
  }
  getLinesByFact(data) {
    return crudService.getOne(route + '/fact/', data)
  }
}

export default new lineService();
