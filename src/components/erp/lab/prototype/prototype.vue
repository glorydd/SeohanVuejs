<template>
  <div   id="app">
    <div class="row">
      <div class="col-6 " align="left">
<!--        <router-link :to="{name: '/locaalm', params: { warehouse: 'XB', gubn:'A2', sts:'1' }}" >-->
        <button class="btn btn-success btn-lg"
                type="button"
                id="linkProtoLocaAlarm"
                @click="linkLocaAlm()"
        >
          시작품 출고 목록</button>
<!--        </router-link>-->
      </div>
      <div class="col-6" align="right">
<!--        <router-link :to="{name: '/lab/proto/warehouse', params: { warehouse: 'XB' }}" >-->
          <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          id="linkProtoWarehouse"
          @click="linkWarehouse()">
          시작품 재고 현황
        </button>
<!--        </router-link>-->
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods:{
    linkLocaAlm(){
      this.$router.replace({path: '/lab/proto/locaalm', query: Object.assign({ warehouse: 'XB', gubn:'A2', sts:'1' })});
    },
    linkWarehouse(){
      this.$router.replace({path: '/lab/proto/warehouse', query: Object.assign({ warehouse: 'XB' })});
    }
  }

}

</script>
