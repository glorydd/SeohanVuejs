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
      pagePath : 'importPlan/userid',
      folderPath:"importPlan", 
      datepicker: new Date(),
      querydate: "",
      dataList: []
    };
  },
  watch:{
    '$route':'getData'
  },
  methods: {
    getData() {
      var userId = localStorage.getItem('user')
      crudService
        .retrieveListByUserId(userId)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    endimportPlan(data) {
      crudService
        .update(data)
        .then(() => {
          this.getData();
        })
        .catch(e => {
          console.log(e);
        });
    },
    fileDown(data) {      
      window.open("/api/file/" + this.folderPath + "/" + data.attach);
    },
  },
  created() {
    crudService.setRoute(this.pagePath);
    this.getData();
  },
  mounted: function() {}
};
</script>
