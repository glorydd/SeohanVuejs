<template>
  <div id="itDamage">
    <router-link to="/general/itdamage/new" exact>New Post</router-link>

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
          <td class="">
            <button
              v-show="data.attach"
              class="btn btn-indigo btn-sm"
              type="button"
              @click="fileDown(data)"
            >다운로드</button>
          </td>
          <td class="genre">
            <button
              class="btn btn-indigo btn-sm"
              type="button"
              id="endDamage"
              @click="enditdamage(data)"
            >완료</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import itDamageService from "@/service/general/itDamageService";
import crudService from "@/services/general/crudService";

export default {
  name: "itDamage",
  data() {
    return {
      folderPath:"itdamage",
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
    enditdamage(data) {
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
      var folderPath="itdamage";
      window.open("/api/file/" + folderPath + "/" + data.attach);
    },
  },
  created() {
    crudService.setRoute('general/itdamage');
    this.getData();
  },
  mounted: function() {}
};
</script>
