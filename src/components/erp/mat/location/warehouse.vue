<template>
  <div id="app">
    <div class="row clearfix col-12">
      <h2 id="titleProtoWarehouse">시작품 재고 현황</h2>

      <!--    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">-->
      <!--      <button type="button" class="btn btn-secondary" value="XA" @click="onFetch()">XA</button>-->
      <!--      <button type="button" class="btn btn-secondary" value="XB" @click="onFetch()">XB</button>-->
      <!--    </div>-->

      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Item 검색</button>
        </div>
        <input type="text" class="form-control" minlength="3" onkeyup="this.value = this.value.toUpperCase();"
               v-model="itmno" v-on:keyup.enter="onFetch()">
        <!--      <input type="label" class="form-control" aria-describedby="basic-addon1">-->
        <div align="left">
          <button class="btn btn-success btn-lg"
                  type="button"
                  id="onFetch"
                  @click="onFetch()"
          >조회
          </button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th class="">Item No</th>
            <th class="d-none d-sm-table-cell d-sm-block">Item Name</th>
            <th class="">Loca</th>
            <th class="">수량</th>
            <th class="">변경 Loca</th>
            <th class="">변경 수량</th>
            <th class="">처리</th>
          </tr>
          </thead>
          <tbody>
          <!--          // row 클릭시 토글-->
          <!--          // 처리 버튼 클릭시 선택된 row 만 sts -> '9'-->
          <!--        @click="rowClick(data, index)"-->
          <tr v-for="(data, index) in dataList.content"
              v-bind:key="data.id" :class="{selected : selected.includes(index)}">
            <td class="">{{ data.itmno }}</td>
            <td class=" d-none d-sm-table-cell d-sm-block">{{ data.dscrp }}</td>
            <td class="">{{ data.locat }}</td>
            <td class=" qty">{{ data.jqty }}</td>
            <td class=""><input class="form-control" type="text" maxlength="4" minlength="4" required="required"
                                onkeyup="this.value = this.value.toUpperCase();"
                                v-model="data.changedLocat"/></td>
            <td class=""><input class="form-control" type="text" @keypress="checkValidLoca()" required="required"
                                onkeyup="this.value = this.value.toUpperCase();"
                                v-model="data.changedQty"/></td>
            <!--          v-on:keyup.enter="checkValidLoca()"-->
            <td class="">
              <button
                class="btn btn-indigo btn-sm"
                type="button"
                id="changeLocation"
                @click="moveLocation(data)"
              >처리
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <ul v-if="dataList.totalPages>0" class="pagination justify-content-center">
        <li v-if="pagination!=0" class="page-item" @click="onPrevious">
          <button class="page-link">이전</button>
        </li>

        <li v-if="dataList.totalPages-(pagination*10)>10" v-for="(i,index) in 10" :key="index"
            @click="onFetch(i+(pagination*10))"
            class="page-item">
          <button class="page-link">{{ i + (pagination * 10) }}</button>
        </li>

        <li v-if="dataList.totalPages-(pagination*10)<=10" v-for="i in (dataList.totalPages%10)"
            @click="onFetch(i+(pagination*10))" class="page-item">
          <button class="page-link">{{ i + (pagination * 10) }}</button>
        </li>

        <li v-if="dataList.totalPages>=11  && (pagination+1)*10<dataList.totalPages" class="page-item"
            @click="onNext">
          <button class="page-link">다음</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/crudService";
import moment from 'moment'
import router from '@/router';

export default {
  name: "warehouse",
  data() {
    return {
      route : this.$route,
      datepicker: new Date(),
      pagination: 0,
      querydate: "",
      itmno: "",
      warehouse: "",
      dataList: [],
      selected: [],
      selectedData: [],

    };
  },
  created() {
    crudService.setRoute('mat/warehouse');
    this.warehouse = this.$route.params.warehouse;
    this.onFetch(0);
  },
  methods: {
    onFetch(index) {
      if (this.itmno === '') return
      var data =
        {
          params: {
            warhs: this.warehouse,
            itmno: this.itmno,
            page: index - 1,
            size: 20
          }
        }

      crudService
        .getDataByParam(data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          alert(e);
        });
    },
    onNext() {
      this.pagination += 1
    },
    onPrevious() {
      if (this.pagination === 0) {
        return
      }
      this.pagination -= 1
    },
    onReset() {
      this.pagination = 0
    },
    moveLocation(data) {
      if (data.changedLocat===undefined || data.changedLocat==='') {
        alert('로케이션 확인');
        return;
      }
      if (data.changedQty===undefined || data.changedQty==='' || data.jqty < data.changedQty) {
        alert('수량 확인');
        return;
      }
      crudService
        .update(data)
        .then(() => {
          this.itmno = data.itmno;
          this.onFetch(0);
        })
        .catch(e => {
          alert(e);
        });
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    }
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
