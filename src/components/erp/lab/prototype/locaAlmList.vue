<template>
  <div class="container" id="app">
    <h2 id="titleTop">시작품 출고 목록</h2>
    <div id="locaAlmList">
      <table class="table table-striped table-bordered">
        <thead>
        <th class>Item No</th>
        <th class>Item Name</th>
        <th class>Location</th>
        <th class>수량</th>
        <th class>LOT</th>
        <th class>처리</th>
        </thead>
        <tbody>
        <tr v-for="data in dataList" v-bind:key="data.jymdhms">
          <td class="">{{ data.itmno }}</td>
          <td class="">{{ data.itm_nm }}</td>
          <td class="">{{ data.locat }}</td>
          <td class="">{{ data.qty }}</td>
          <td class="">{{ data.lotno }}</td>
          <td class="genre">
            <button
              class="btn btn-indigo btn-sm"
              type="button"
              id="endLocaAlmList"
              @click="endLocaAlmList(data)"
            >처리</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/crudService";

export default {
  name: "locaAlmList",
  data() {
    return {
      datepicker: new Date(),
      folderPath: "locaAlmList",
      querydate: "",
      dataList: []
    };
  },
  methods: {
    getData() {
      crudService
        .retrieveList()
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    endLocaAlmList(data) {
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
    crudService.setRoute('erp/lab/locaalm');
    this.getData();
  },
  mounted: function () {
  },
  computed: {}
};
</script>
