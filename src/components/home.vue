<template>
  <div>
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
        store.dispatch('LOGOUT').then(() => this.$router.push('/login'))
      }
    }
  }
</script>
