<template>
  <div id="importPlan">
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
        <tr v-for="data in dataList" v-bind:key="data" >
          <td class="d-none d-sm-block">{{data.class1}}</td>
          <td class="d-none d-sm-block">{{data.co_gb}}</td>
          <td class="d-none d-sm-block">{{data.rteam}}</td>
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
      crudService
        .retrieveListByQueryDate('20200720')
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    crudService.setRoute('mat/importPlan');
    this.getData();
  },
  mounted: function() {}
};
</script>
