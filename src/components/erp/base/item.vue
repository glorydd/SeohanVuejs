<template>
  <div id="item">
  <div class="input-group mb-3">
    <input type="text" class="form-control" minlength="3" v-model="itmno">
    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary" type="button">Item 검색</button>
    </div>
  </div>

  <div>
    <!--      <button @click="$emit('update:visible', !visible)">Close</button>-->
    <table class="table table-striped table-bordered" id="dataTable">
      <tbody>
      <tr v-for="data in dataList" v-bind:key="data.itmno" @click="enditem(data)">
        <td class="d-none d-sm-block">{{ data.class1 }}</td>
        <td class="d-none d-sm-block">{{ data.co_gb }}</td>
        <td class>
          <button
            v-show="data.attach"
            class="btn btn-indigo btn-sm"
            type="button"
            @click="fileDown(data)"
          >다운로드
          </button>
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
  name: "item",
  data:{
    itmno:''
  },
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    title: {
      type: String,
      require: false
    }
  },
  watch: {
    $route: "getData"
  },
  methods: {
    // handleWrapperClick() {
    //   this.$emit("update:visible", false);
    // },
    getData(data) {
      var data =
        {
          params: {
            warhs: 'XB',
            itmno: this.itmno,
            pumgb: ''
          }
        }
      crudService
        .getDataByParam(data)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  created() {
    crudService.setRoute("base/item");
    this.getData();
  },
  mounted: function () {
  }
};
</script>
