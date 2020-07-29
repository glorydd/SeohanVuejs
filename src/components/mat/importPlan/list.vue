<template>
  <div id="importplan">
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
import AuthService from '@/services/auth/auth.service';
import crudService from "@/services/crudService";

export default {
  name: "importplan",
  data() {
    return {
      folderPath:"importplan", 
      datepicker: new Date(),
      querydate: "",
      dataList: [],
      user:[]
    };
  },
  watch:{
    '$route':'getData'
  },
  methods: {
    getData() {
      AuthService.getUserContent().then(
      response => {
        this.user = response.data;        
      });

      crudService
        .retrieveListByQueryDate(this.user.asabn)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        })
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
      var folderPath="importplan";
      window.open("/api/file/" + folderPath + "/" + data.attach);
    },
  },
  created() {
    crudService.setRoute('mat/importplan/alarm');
    this.getData();
  },
  mounted: function() {}
};
</script>
