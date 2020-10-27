import axios from "axios";
import {onUnauthorized} from './index'
import authHeader from "./auth";

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404


const crudService = {  

  async getDataByPath(route, data) {
    try {
      let accessToken = localStorage.getItem('access_token');
      const result = await axios.get('/api/' + route + '/' +  data, {
        headers: { 
          'Authorization': 'Basic ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    }
  },
  async getAllList(route) {
    try {
      let accessToken = localStorage.getItem('access_token');
      const result = await axios.get('/api/' + route, {
        headers: { 
          'Authorization': 'Basic ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    }
  },
  async getDataByParam(route, data) {
    try {
      let accessToken = localStorage.getItem('access_token');
      const result = await axios.get('/api/' + route + '/params', data, {
        headers: { 
          'Authorization': 'Basic ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        }        
      });
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    }
  },

  async update(route, data) {
    try {
      const result = await axios.put('/api/' + route, data);
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    };
  },

  async save(route, data) {
    try {
      const result = await axios.post('/api/' + route, data, headerInfo());
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    };
  },

  async fileUpload(route, data) {
    try {
      const result = await axios.post('/api/' + route + '/files', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Process-Data": false,
        }
      });
      return result;
    } catch ({ response }) {
      if (response.status === Unauthorized)
        return onUnauthorized();
      else if (response.status == Forbidden)
        return onForbidden(response);
      else if (response.status == BadRequest)
        return onBadRequest(response);
      else if (response.status == NotFound)
        return onNotFound(response);
      throw Error(response);
    };
  },
  fileDown(route, data) {
    let param = {
      params: {
        folderPath : route,
        filename: data
      }}
    window.location.href = '/api/file?folderPath=' + route + '&filename=' + data;

    return axios.get('/api/file', param, {responseType: "blob"});
  }
}
export default crudService;

