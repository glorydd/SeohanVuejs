<template>
  <div id="program">  
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
        <tr v-for="data in dataList" v-bind:key="data.rtime" v-on:click="'tel:' + data.rtel">
          <td class="d-none d-sm-block">{{data.class1}}</td>
          <td class="d-none d-sm-block">{{data.co_gb}}</td>
          <td class="d-none d-sm-block">{{data.rteam}}</td>
          <td class="d-none d-sm-block">
            <a v-bind:href="'tel:' + data.rtel">{{data.rname}}</a></td>
          <td class="d-none d-sm-block">
            <a v-bind:href="'tel:' + data.rtel">{{data.rtel}}</a>
          </td>
          <td class=""><a v-bind:href="'tel:' + data.rtel">{{data.rtxt}}</a></td> 
          <td class="genre">
            <button
              class="btn btn-indigo btn-sm"
              type="button"
              id="endDamage"
              @click="endprogram(data)"
            >완료</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script> 
import crudService from "@/services/general/crudService";

export default {
  name: "program",
  data() {
    return {
      folderPath:"program",
      ctime: "",
      rtime: "",
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
        .retrieveList('01')
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    endprogram(data) {
      crudService
        .update(data)
        .then(() => {
          this.getData();
        })
        .catch(e => {
          console.log(e);
        });
    }, 
  },
  created() {
    crudService.setRoute('general/program');
    this.getData();
  },
  mounted: function() {}
};
</script>
