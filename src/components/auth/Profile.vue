<template>
  <div class="container">
    <header class="jumbotron">
      <h3>id : {{content.asabn}}</h3>
      <h3>user name : {{content.kname}}</h3>
      <h3>email : {{content.asabn}}@seohan.com</h3>
    </header>
  </div>
</template>

<script>
import Auth from '@/services/auth';
import {mapGetters} from 'vuex'

export default {
  name: 'profile',
  data() {
    return {
      content: ''
    }
  },
  // computed:{
  //   getUserInfo(){
  //     this.$store.getters.getUserInfo;
  //   }
  // },
  computed: mapGetters({
    content : 'getUserInfo'
  }),
  mounted() {
    Auth.getUserContent().then(
      response => {
        this.content = response.data;        
      },
      error => {
        this.content = error.response.data.message;
        alert(error.response.data.message);
      }
    )
  }
};
</script>
