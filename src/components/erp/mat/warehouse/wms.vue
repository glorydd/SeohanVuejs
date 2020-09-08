<template>
  <div   id="app">
    <div class="row">
      <div class="col-6 " align="left">
        <button class="btn btn-success btn-lg"
                type="button"
                id="linkProtoLocaAlarm"
                @click="linkLocaAlm()"
        >
           출고 목록</button>
      </div>
      <div class="col-6" align="right">
          <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          @click="linkWarehouse('AB')">
          1공장 재고 현황
        </button>
        <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          @click="linkWarehouse('BB')">
          2공장 재고 현황
        </button>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods:{
    linkLocaAlm(warehouse){
      this.$router.replace({path: '/mat/wms/locaalm', query: Object.assign({ warehouse: warehouse, gubn:'A2', sts:'1' })});
    },
    linkWarehouse(warehouse){
      this.$router.replace({path: '/mat/wms/warehouse', query: Object.assign({ warehouse: warehouse})});
    }
  }

}

</script>
