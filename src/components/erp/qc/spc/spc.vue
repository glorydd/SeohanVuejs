<template>
  <div   id="app">
    <div class="row">
      <div class="col-12 " align="left">
        <div class="input-group-prepend">
          <button class="btn btn-secondary" type="button" data-toggle="modal"  data-target="#factSearchModal"  >Fact 검색</button>
          <modal name="factSearchModal"/>
        </div>

        <div class="input-group-prepend">
          <button class="btn btn-secondary" type="button" data-toggle="modal"  data-target="#itemSearchModal"  >Item 검색</button>
          <modal name="itemSearchModal"/>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import factSearchModal from '@/components/erp/base/fact'
import itemSearchModal from '@/components/erp/base/item' ;

export default {
  components: {
    itemSearchModal: itemSearchModal,
    factSearchModal: factSearchModal
  },
  name: "spc",
  data() {
    return {
      modal:false,
      route: this.$route,
      itmno: "",
      fact:"",
      dataList: [],
      selected: [],
      selectedData: [],
    }
  },
  created() {
    this.onFetch(0);
  },
  methods: {
    setItem(itemno) {
      this.itmno = itemno;
      if (itemno != '') $('#itemSearchModal').modal('toggle');
    },
    setFact(fact) {
      this.fact = fact;
      if (fact != '') $('#factSearchModal').modal('toggle');
    },
    linkWarehouse(warehouse) {
      this.$router.replace({name: 'warehouse', query: Object.assign({warehouse: warehouse})})
        .then(location.reload())
        .catch(error => {
          if (error.name === "NavigationDuplicated") {
            location.reload();
          }
        });
    }
  },
  mounted() {
    $('#itemSearchModal').modal('hide') ;
  },
}

</script>
