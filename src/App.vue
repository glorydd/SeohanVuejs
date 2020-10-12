  <template>
    <router-view/>
    <!--
        <a class="navbar-brand" href="/">
          <img src="@/assets/seohanico.jpg" width="30" height="30" alt />
        </a>
          <a class="navbar-brand" v-if="currentUser" href @click.prevent="onClickLogout">Logout</a>
        <a class="navbar-brand" v-if="!currentUser" href="/login" exact>Login</a>
        <a class="navbar-brand" v-if="currentUser" href="/me">Me</a>
      </div>

      <div class="navbar-nav ml-auto" v-if="!currentUser">
        <li class="nav-item">
          <a href="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </a>
        </li>
      </div>
      <div class="navbar-nav ml-auto" v-if="currentUser">
        <li class="nav-item">
          <a href="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{currentUser.asabn}}
          </a>
        </li>
        <li class="nav-item">
          <a href class="nav-link" @click="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>
    </div>-->
</template>
<script>
export default {
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
