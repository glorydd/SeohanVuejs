import axios from "axios";

class foodTableService {
    foodTable (querydate, company) {
      var route='foodTable';
      switch (company){
        case('seohan'): route = 'foodTable'; break;
        case('kamtec'): route = 'foodTableKamtec'; break;
        case('lab'): route = 'foodTableLab'; break;
        // case('kamtec'): route = 'foodTableKamtec'; break;
      }
      return axios.get('/api/general/'+ route + '?gdate=' + querydate);
    }
}

export default new foodTableService();
