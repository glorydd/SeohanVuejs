<template>
  <div class="container" id="app">
    <h2 id="titleProtoWarehouse">시작품 재고 현황</h2>

<!--    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">-->
<!--      <button type="button" class="btn btn-secondary" value="XA" @click="getData()">XA</button>-->
<!--      <button type="button" class="btn btn-secondary" value="XB" @click="getData()">XB</button>-->
<!--    </div>-->

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">Item 검색</button>
      </div>
      <input type="text" class="form-control"  minlength="3" v-model="itmno">
      <input type="label" class="form-control" aria-describedby="basic-addon1" >
    </div>

    <div class="row">
      <div class="col-6 " align="left">
        <button class="btn btn-success btn-lg"
                type="button"
                id="getData"
                @click="getData()"
        >조회
        </button>
      </div>
      <div class="col-6" align="right">
        <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          id="endLocaAlmList"
          @click="endLocaAlmList()"
        >처리
        </button>
      </div>
    </div>

    <div id="warehouse" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
      <table class="table table-bordered">
        <thead>
        <th class="">작성시간</th>
        <th class="">Item No</th>
        <th class="">Item Name</th>
        <th class="">Loca</th>
        <th class="">수량</th>
        <th class="">Line</th>
        </thead>
        <tbody>
        <!--          // row 클릭시 토글-->
        <!--          // 처리 버튼 클릭시 선택된 row 만 sts -> '9'-->

        <!--        d-sm-none d-md-block-->
        <tr v-for="(data, index) in dataList"
            v-bind:key="data.id" @click="rowClick(data, index)" :class="{selected: selected.includes(index)}">
          <td class="" align="center">{{ data.jymdhms || formatDate }}</td>
          <td class="">{{ data.itmno }}</td>
          <td class="">{{ data.itm_nm }}</td>
          <td class="" align="center">{{ data.locat }}</td>
          <td class="" align="right">{{ data.qty }}</td>
          <td class="" align="center">{{ data.line_cd }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/crudService";
import moment from 'moment'


export default {
  name: "warehouse",
  data() {
    return {
      datepicker: new Date(),
      querydate: "",
      itmno : "",
      warehouse:"",
      dataList: [],
      selected: [],
      selectedData: [],

    };
  },
  methods: {
    getData() {
      this.warehouse = "XB"
      var data =
      {
        params: {
          warhs: 'XB',
          itmno: this.itmno,
          cstcd: '',
          dscrp: '',
          cusna: ''
        }
      }
      crudService
        .getDataByParam(data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    endLocaAlmList() {
      crudService
        .update(this.selectedData)
        .then(() => {
          this.getData();
        })
        .catch(e => {
          console.log(e);
        });
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    },
    rowClick(data, index) {
      const id = this.selected.indexOf(index);
      if (id > -1) {
        this.selected.splice(id, 1)
        this.selectedData.splice(data, 1)
      } else {
        this.selected.push(index)
        this.selectedData.push(data)
      }
    }
  },
  created() {
    crudService.setRoute('mat/warehouse');
    this.getData();
  },
  mounted: function () {
  },
  computed: {}
};
</script>





<style>
.active {
  background-color: grey;
}

.selected {
  color: #fafafa;
  background-color: #224488;
}
</style>
