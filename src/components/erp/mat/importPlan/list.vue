<template>
  <div id="importPlan">
    <table class="table table-striped table-bordered" id="dataTable">
      <thead> 
        <tr id="">
          <th class="">업체명</th>
          <th class="">품번</th>
          <th class="">품명</th>
          <!-- <th class="">업체코드</th> -->          
          <th class="">창고코드</th>
          <th class="">발주수량</th>
          <th class="">입고수량</th>
          <th class="">대기수량</th>
          <th class="">진행수량</th>
          <th class="">만료수량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataList" v-bind:key="data.itmno" >
          <!-- <td class="">{{data.cstcd}}</td> -->
          <td class="">{{data.cusna}}</td>
          <td class="">{{data.dscrp}}</td>          
          <td class="">{{data.itmno}}</td>
          <td class="">{{data.warhs}}</td>
          <td class="">{{data.mqty}}</td>
          <td class="">{{data.bsqty}}</td>
          <td class="">{{data.tsqty}}</td>
          <td class="">{{data.preqty}}</td>
          <td class="">{{data.expqty}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudService from "@/services/crudService"; 
import {account} from '@/services/auth';

export default {
  name: "importPlan", 
  data() {
    return {
      route:"mat/import-plan",
      datepicker: new Date(), 
      dataList: [],
      index : 0,

      accountid : ''
    };
  }, 
  methods: {
    getData() {
      let user = getAccountId();
      let userid = JSON.parse(localStorage.user).accountid;

      crudService.getDataByPath(this.route + '/alarm/user',userid) 
        .then(response => {
          this.dataList = response.data; 
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  
  created() { 
    this.getData();
  },
  mounted: function() {}
};
</script>
