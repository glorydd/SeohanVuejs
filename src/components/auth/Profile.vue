<template>
  <div class="container">
    <header class="jumbotron">
      <h3>id : {{content.accountid}}</h3>
      <h3>user name : {{content.name}}</h3>
      <h3>email : {{content.email}}</h3>
      <h3>phone : {{content.phone}}</h3>
    </header>
  </div>
</template>

<script>
import {auth, account} from '@/services/auth';
import {mapGetters} from 'vuex'

export default {
  name: 'profile',
  data() {
    return {
      content: {
        accountid:'',
        name:'',
        email:'',
        phone :''
      }
    }
  },
  // computed:{
  //   getUserInfo(){
  //     this.$store.getters.getUserInfo;
  //   }
  // },
  mounted() {
    account.fetch()
    .then(
      response => {
        this.content = response.data;        
      },
      error => {
        this.content = error.response.data.message;
      }
    )
  }
};
</script>
