<template>
  <div id="line" v-if="visible" @click.self="handleWrapperClick">
    <div>
      <button @click="$emit('update:visible', !visible)">Close</button>
      <table class="table table-striped table-bordered" id="dataTable">
        <tbody>
          <tr v-for="data in dataList" v-bind:key="data.itmno" @click="endline(data)">
            <td class="d-none d-sm-block">{{data.class1}}</td>
            <td class="d-none d-sm-block">{{data.co_gb}}</td>
            <td class>
              <button
                v-show="data.attach"
                class="btn btn-indigo btn-sm"
                type="button"
                @click="fileDown(data)"
              >다운로드</button>
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
  name: "line",
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
    handleWrapperClick() {
      this.$emit("update:visible", false);
    },
    getData() {
      crudService
        .retrieveList("")
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    fileDown(data) {
      var folderPath = "line";
      window.open("/api/file/" + folderPath + "/" + data.attach);
    }
  },
  created() {
    crudService.setRoute("base/line");
    this.getData();
  },
  mounted: function() {}
};
</script>
