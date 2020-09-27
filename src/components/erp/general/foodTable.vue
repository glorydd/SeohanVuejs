<template>
  <div class="container" id="app">
    <div class="row col-md-12 col-lg-12 col-sm-12 col-xs-12  ">
      <div>
        <h3>식단표</h3>
          <button class="btn btn-default" v-on:click="getFoodByCompany('SEOHAN')">서한</button>
          <button class="btn btn-default" v-on:click="getFoodByCompany('KAMTEC')">캄텍</button>
          <button class="btn btn-default" v-on:click="getFoodByCompany('LAB')">연구소</button>
        <input class="form-control"
          v-model="datepicker"
          v-on:change="getFoodTableList()"
          type="date"
          value="datepicker && datepicker.toISOString().split('T')[0]"
        />

      </div>
        <table class="table table-bordered">
          <thead>
            <th class>구분</th>
            <th class>메뉴</th>
          </thead>
          <tbody>
            <tr v-for="data in dataList" v-bind:key="data.gubn">
              <td v-bind:class="{'A' : data.gubn==='아침' || data.gubn==='저녁'}">{{data.gubn}}</td>
              <td v-bind:class="{'A' : data.gubn==='아침' || data.gubn==='저녁'}">{{data.menu}}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/crudService";

export default {
  name: "foodTable",
  data() {
    return {
      route : 'general/food',
      datepicker: new Date(),
      querydate: "",
      companycode: "",
      dataList: []
    };
  },
  methods: {
    background(thing){
      if (thing ==='A'){
        return 'red' ;
      }else{
        return 'black' ;
      }
    },
    getFoodByCompany(companycode){
      this.companycode = companycode;
      this.getFoodTableList();
    },
    getFoodTableList() {      
      var data ={
        params:{
          gdate :this.datepicker.substr(0, 4) +this.datepicker.substr(5, 2) +this.datepicker.substr(8, 2),
          companycode: this.companycode
        }
      }

      crudService.getDataByParam(this.route, data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {console.log(e);});

    },
  },
  created() {
    var today = new Date();
    this.datepicker =
      today.getFullYear() + "-" +("00" + (today.getMonth() + 1)).slice(-2) +"-" +("00" + today.getDate()).slice(-2);
    this.getFoodByCompany('SEOHAN');
  },
  mounted: function() {},
  computed: {
  }
};
</script>
<style scoped>
  .A, .C {
    background-color: #EFEFEF;
  }
</style>

