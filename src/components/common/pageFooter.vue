<template>

  <div id="pageFooter">
    pageNation
<!--    <ul v-if="dataList.totalPages>0" class="pagination justify-content-center">-->
<!--      <li v-if="pagination!=0" class="page-item" @click="onPrevious">-->
<!--        <button class="page-link">이전</button>-->
<!--      </li>-->

<!--      <li v-if="dataList.totalPages-(pagination*10)>10" v-for="(i,index) in 10" :key="index"-->
<!--          @click="this.$root.onFetch(i+(pagination*10))"-->
<!--          class="page-item">-->
<!--        <button class="page-link">{{ i + (pagination * 10) }}</button>-->
<!--      </li>-->

<!--      <li v-if="dataList.totalPages-(pagination*10)<=10" v-for="i in (dataList.totalPages%10)"-->
<!--          @click="this.$root.onFetch(i+(pagination*10))" class="page-item">-->
<!--        <button class="page-link">{{ i + (pagination * 10) }}</button>-->
<!--      </li>-->

<!--      <li v-if="dataList.totalPages>=11  && (pagination+1)*10<dataList.totalPages" class="page-item"-->
<!--          @click="onNext">-->
<!--        <button class="page-link">다음</button>-->
<!--      </li>-->
<!--    </ul>-->

  </div>
</template>

<script>
export default {
  name: "pageFooter",
  data() {
    return {
      pagination: 0,
      dataList: []
    }
  },
  methods: {
    onNext() {
      this.pagination += 1
    },
    onPrevious() {
      if (this.pagination === 0) {
        return
      }
      this.pagination -= 1
    },
    onReset() {
      this.pagination = 0
    },
  },
  mounted: function () {
  }
};
</script>
