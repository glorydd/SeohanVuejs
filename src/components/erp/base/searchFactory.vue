<template>
  <div id="factSearch" style="overflow: auto">
    <h2>공장 검색</h2>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th class="">공장코드</th>
          <th class="">공장명</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in dataList" v-bind:key="data.asgub" @click="selectFact(data)">
          <td class="">{{ data.asgub }}</td>
          <td class="">{{ data.asdes }}</td>
        </tr>
        </tbody>
      </table>
    </div>
<!--    @changed="onFetch"-->
    <pageFooter  />
    <!--  </transition>-->
  </div>
</template>

<script>
import crudService from "@/services/crudService";
import pageFooter from "@/components/common/pageFooter";
import store from "../../../store";

export default {
  name: "item",
  components:{
    pageFooter
  },
  data() {
    return {
      route : 'base/code',
      dataList: []
    }
  },
  // props:{
  //   method: {type: Function},
  // },
  // mounted() {
  //   this.method(this.itmno);
  // },
  methods: {
    onFetch(index) {
      if (this.itmno === '') return
      var data =
        {
          params: {
            companycode: store.state.account.companycode,
            page: index - 1,
            size: 20
          }
        }
      crudService.getAllList(this.route + '/fact')
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {console.log(e);});
    },
    selectFact(data){
      this.method(data.asgub);
    }
  },
  created() {
    this.onFetch(0);
  }
};
</script>
<style>

</style>
