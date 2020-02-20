  <template>
  <div>
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar" v-bind:class="{'active' : toggleClass}">
        <div class="sidebar-header" v-on:click="toggle">
          <h3>Seohan Group</h3>
        </div>

        <ul class="list-unstyled components">
          <li>
            <a href="/" id="main-toggle" class="sidebar-toggle">Seohan Group</a>
          </li>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            ><img src="@/assets/icon/menu/menu1.png">공통</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li class="dropdown-menu__item">
                <a href="/general/report/list">공정신고</a>
              </li>
              <li>
                <a href="/general/itdamage/list">전산고장신고</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li class="active">
            <a
              href="#homeSubmenu2"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >영업</a>
            <ul class="collapse list-unstyled" id="homeSubmenu2">
              <li class="dropdown-menu__item">
                <a href="/sales/asQuality/list">AS 품질 확보</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >Pages</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button type="button" class="btn btn-info" v-on:click="toggle">
              <i class="fas fa-align-left"></i>
            </button>

            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/general/foodtable">식단표</a>
                </li>
                <li class="nav-item">
                  <!-- <a class="nav-link" href="#">Page</a> -->
                </li>
                <li class="nav-item">
                  <a class="nav-link" v-if="currentUser" v-on:click="logOut">Logout</a>
                  <a class="nav-link" v-if="!currentUser" href="/login" exact>Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" v-if="currentUser" href="/profile">Me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <router-view />
      </div>
    </div>
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
  </div>
</template>
<script src='../src/assets/js/bootstrap.min.js'>
</script>

<script>


export default {
  name: "App",
  data() {
    return {
      toggleClass: false
    };
  },
  mounted() {
    // $("[data-role=dropdown]").dropdown();
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    toggle() {
      if (this.toggleClass === true) {
        this.toggleClass = false;
      } else {
        this.toggleClass = true;
      }
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  }
};
</script>

<style>
@import url("./assets/css/app.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
</style>
