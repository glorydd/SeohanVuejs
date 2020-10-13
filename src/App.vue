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
</style>
