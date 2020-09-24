<template>
  <!--  <transition name="item" appear>-->
  <div id="itemSearch" style="overflow: auto">
    <h2>Item 검색</h2>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <input type="text" class="form-control" minlength="3" v-model="itmno" v-on:keyup.enter="onFetch()">
        <button class="btn btn-secondary" type="button" @click="onFetch(0)">Item 검색</button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th class="">품목</th>
          <th class="">차종</th>
          <th class="">품종</th>
          <th class="">Item No</th>
          <th class="d-none d-sm-table-cell d-sm-block">Item Name</th>
          <th class="">단위</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in dataList.content" v-bind:key="data.itmno" @click="selectItem(data)">
          <td class="">{{ data.pummock }}</td>
          <td class="">{{ data.chajong }}</td>
          <td class="">{{ data.pumjong }}</td>
          <td class="">{{ data.itmno }}</td>
          <td class="">{{ data.dscrp }}</td>
          <td class="">{{ data.units }}</td>
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

export default {
  name: "item",
  components:{
    pageFooter
  },
  data() {
    return {
      route : 'base/item/',
        itmno: '',
        warhs: '',
        cartype: '',
        itemtype: '' ,
      dataList: []
    }
  },
  props:{
    method: {type: Function},
  },
  mounted() {
    this.method(this.itmno);
  },
  methods: {
    onFetch(index) {
      if (this.itmno === '') return
      var data =
        {
          params: {
            itmno: this.itmno,
            warhs: this.warhs,
            cartype: this.cartype,
            pumgb: this.itemtype,
            page: index - 1,
            size: 20
          }
        }
      crudService.getDataByParam(this.route, data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {console.log(e);});
    },
    selectItem(data){
      this.method(data.itmno);
    }
  },
  created() {
    this.onFetch(0);
  }
};
</script>
<style>

</style>
