<template>
  <div class="container" id="app">
    <h2 id="titleTop">시작품 출고 목록</h2>
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

    <div id="locaAlmList" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
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
  name: "locaAlmList",
  data() {
    return {
      datepicker: new Date(),
      folderPath: "locaAlmList",
      querydate: "",
      dataList: [],
      selected: [],
      selectedData: [],
    };
  },
  methods: {
    getData() {
      crudService
        .retrieveList()
        .then(response => {
          this.dataList = response.data;

          this.selected = [];
          this.selectedData = [];

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
    crudService.setRoute('erp/lab/locaalm');
    this.getData();
    // filter('formatDate', function (value) {
    //   if (value) {
    //     return moment(String(value)).format('MM/DD/YYYY hh:mm')
    //   }
    // })
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
