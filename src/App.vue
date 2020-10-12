  <template>
    <div>
      <menu></menu>
      <router-view/>
    </div>
</template>
<script>
import menu from '@/components/menu';

export default {
  data() {
    return {
      menu : menu,
      toggleClass: false
    };
  },
  name: "app",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
};

</script>

<style>
@import url("./assets/css/app.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
</style>
