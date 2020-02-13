<template>
  <div class="container" id="app">
    <div class="row panel panel-default panel-body">
      <div>
        <h3>식단표</h3>
          <button class="btn btn-default" v-on:click="foodTable('seohan')">서한</button>
          <button class="btn btn-default" v-on:click="foodTable('kamtec')">캄텍</button>
          <button class="btn btn-default" v-on:click="foodTable('lab')">연구소</button>
        <input class="form-control"
          v-model="datepicker"
          v-on:change="foodTable"
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
              <td  v-bind:class="{'A' : data.gubn==='아침' || data.gubn==='저녁'}">{{data.gubn}}</td>
              <td v-bind:class="{'A' : data.gubn==='아침' || data.gubn==='저녁'}">{{data.menu}}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import foodTableService from "@/services/general/foodTableService";

export default {
  name: "foodTable",
  data() {
    return {
      datepicker: new Date(),
      querydate: "",
      company: "",
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
    foodTable(company) {
      this.querydate =this.datepicker.substr(0, 4) +this.datepicker.substr(5, 2) +this.datepicker.substr(8, 2);
      this.company= company;

      foodTableService
        .foodTable(this.querydate, this.company)
        .then(response => {
          response.data.forEach(function(item) {
            switch (item.gubn) {
              case "A":
                item.gubn = "아침";
                // this.tableStyle.backgroundColor='EFEFEF';
                break;
              case "B":
                item.gubn = "점심";
                // this.tableStyle.backgroundColor='FBFBFB';
                break;
              case "C":
                item.gubn = "저녁";
                // this.tableStyle.backgroundColor='EFEFEF';
                break;
              case "D":
                item.gubn = "야식";
                // this.tableStyle.backgroundColor='FBFBFB';
                break;
            }
          });
          this.dataList = response.data;

        })
        .catch(e => {
          console.error(e);
        });
    },
  },
  created() {
    var today = new Date();
    this.datepicker =
      today.getFullYear() + "-" +("00" + (today.getMonth() + 1)).slice(-2) +"-" +("00" + today.getDate()).slice(-2);
    this.foodTable('seohan');
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

