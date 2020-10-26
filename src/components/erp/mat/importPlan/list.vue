<template>
  <div id="importPlan">
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>

        <tr v-for="data in dataList" v-bind:key="data" >
          <td class="d-none d-sm-block">{{data.cstcd}}</td>
          <td class="d-none d-sm-block">{{data.itmno}}</td>
          <td class="d-none d-sm-block">{{data.warhs}}</td>
          <td class="d-none d-sm-block">{{data.mqty}}</td>
          <td class="d-none d-sm-block">{{data.bsqty}}</td>
          <td class="d-none d-sm-block">{{data.tsqty}}</td>
          <td class="d-none d-sm-block">{{data.preqty}}</td>
          <td class="d-none d-sm-block">{{data.expqty}}</td>
          <td class="d-none d-sm-block">{{data.dscrp}}</td>
          <td class="d-none d-sm-block">{{data.cusna}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudService from "@/services/crudService"; 

export default {
  name: "importPlan",
  data() {
    return {
      route:"mat/import-plan",
      datepicker: new Date(), 
      dataList: [],
      index : 0
    };
  },
  watch:{
    '$route':'getData'
  },
  methods: {
    getData() {
      let userid = JSON.parse(localStorage.user).asabn;

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
