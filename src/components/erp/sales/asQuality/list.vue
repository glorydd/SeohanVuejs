<template>
  <div id="asQuality">
    <router-link to="/sales/asQuality/new" exact>New Post</router-link>

    <button @click="ShowItemListButton">Toggle Modal</button>
    <app-my-modal
      title="Registered Item"
      :visible.sync="itemLIstVisible">
      <div> Registered Item</div>
    </app-my-modal>
<!--
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
              @click="endasQuality(data)"
            >완료</button>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import store from 'vuex';
import crudService from "@/services/crudService";
import itemList from '@/components/erp/base/item';

export default {
  name: "asQuality",
  data() {
    return {
      folderPath:"asQuality",
      ctime: "",
      rtime: "",
      datepicker: new Date(),
      querydate: "",
      dataList: [],
      itemLIstVisible:false,
    };
  },
  watch:{
    '$route':'getData'
  },
  components: {
    appMyModal: itemList
  },
  methods: {
    ShowItemListButton(){
      this.itemLIstVisible = !this.visible
    } ,
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
    fileDown(data) {
      var folderPath="asQuality";
      window.open("/api/file/" + folderPath + "/" + data.attach);
    },
  },
  created() {
    crudService.setRoute('erp/sales/asQuality');
    this.getData();
  },
  mounted: function() {}
};
</script>
