<template>
  <div class="container">
    <nav class="navbar navbar-light ">
      <!-- <a class="navbar-brand" href="/">
        <img src="@/assets/seohanico.jpg" width="30" height="30" alt="">
      </a>
      <a class="navbar-brand" href="/general/itdamage/list" exact>전산고장신고</a>
      <a class="navbar-brand" href="/general/report/list" exact>공정신고</a>
      <a class="navbar-brand" href="/general/foodtable" exact>식단표</a>
      <a class="navbar-brand" v-if="isAuthenticated" href="" @click.prevent="onClickLogout"  >Logout</a>
      <a class="navbar-brand" v-else href="/login" exact>Login</a>
      <a class="navbar-brand" v-if="isAuthenticated" href="/me">Me</a> -->

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      isAuthenticated() {
        return store.getters.isAuthenticated
      }
    },
    methods: {
      onClickLogout() {
        // LOGOUT 변이 실행 후 리다이렉트
        store.dispatch('LOGOUT').then(() => this.$router.push('/general'))
      }
    }
  }
</script>
