<template>
  <div id="report">
    <router-link to="/general/report/new" exact>New Post</router-link>

    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
        <tr v-for="data in dataList" v-bind:key="data.udate">
          <td class="d-none d-sm-block">{{data.udate}}</td>
          <td class="d-none d-sm-block">{{data.ser}}</td>
          <td class="d-none d-sm-block">{{data.fgub}}</td>
          <td class="d-none d-sm-block">{{data.line}}</td>
          <td class="d-none d-sm-block">{{data.rut}}</td>
          <td class="d-none d-sm-block">{{data.sgub}}</td>
          <td class="d-none d-sm-block">{{data.fourm}}</td>
          <td class="">{{data.udes}}</td>
          <td class="">{{data.bsdes}}</td>
          <td class="">{{data.gjdes}}</td>
          <td class="">{{data.fill}}</td>
          <td class="">
            <button
              v-show="data.attach"
              class="btn btn-default btn-sm"
              type="button"
              @click="fileDown(data)"
            >다운로드</button>
          </td>
          <td class="genre">
            <button
              class="btn btn-default btn-sm"
              type="button"
              id="endDamage"
              @click="endreport(data)"
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
  name: "report",
  data() {
    return {
      stat: "",
      datepicker: new Date(),
      dataList: []
    };
  },
  watch:{
    '$route':'getData'
  },
  methods: {
    getData() {
      var stat = "1";
      crudService
        .retrieveList(stat)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    endreport(data) {
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
      window.open("/api/file/" + data.attach);
    }
  },
  created() {
    crudService.setRoute('general/report');
    this.getData();
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
