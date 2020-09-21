<template>
  <div   id="app">
    <div class="row">
      <div class="col-12 " align="left">
          <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          @click="linkWarehouse('AB')"
          >
          1공장
        </button>

        <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          @click="linkWarehouse('BB')"
          >
          2공장
        </button>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods:{
    // linkLocaAlm(warehouse){
    //   this.$router.push({name: 'locaalm', params: Object.assign({ warehouse: warehouse, gubn:'A2', sts:'1' })})
    //     .then(location.reload())
    //     .catch(error => {
    //     if(error.name === "NavigationDuplicated" ){
    //       location.reload();
    //     }
    //   })
    // },
    linkWarehouse(warehouse){
      this.$router.replace({name: 'warehouse', query: Object.assign({ warehouse: warehouse})})
        .then(location.reload())
        .catch(error => {
          if(error.name === "NavigationDuplicated" ){
            location.reload();
          }
        }) ;
    }

    // linkWarehouse(warehouse){
    //   this.$router.replace({name: 'warehouse', query: Object.assign({ warehouse: warehouse})})
    //     .then(location.reload())
    //     .catch(error => {
    //       if(error.name === "NavigationDuplicated" ){
    //         location.reload();
    //       }
    //     }) ;
    // }
  }

}

</script>
