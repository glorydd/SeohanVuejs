<template>
  <div id="registerGuest">
    등록
  </div>
</template>

<script>
import registerGuestService from "@/services/general/registerGuestService";

export default {
  name: "registerGuest",
  data() {
    return {
      rtime: "",
      dataList: []
    };
  },
  methods: {
    getData() {
      registerGuestService
        .retrieve(rtime)
        .then(response => {
          this.dataList = response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    save(data) {
      registerGuestService
        .save(data)
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
