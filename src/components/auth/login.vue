// components/Login.vue
<template>
  <div class=" col-xs-2">
    <div id="login" class="form-group">
      <div class="btn-group">
        <button
          id="SEOHAN"
          type="button"
          class="btn btn-default"
          value="SEOHAN"
          v-on:click="setCompanyCode('SEOHAN')"
        >서한</button>
        <button
          id="KAMTEC"
          type="button"
          class="btn btn-default"
          value="KAMTEC"
          v-on:click="setCompanyCode('SEOHAN')"
        >캄텍</button>
        <button
          id="KOFCO"
          type="button"
          class="btn btn-default"
          value="KOFCO"
          v-on:click="setCompanyCode('SEOHAN')"
        >프랜지</button>
      </div>
      <p></p>
      <label for="ID">ID</label>
      <input
        type="text"
        class="form-control"
        v-model="user.asabn"
        name="asabn"
        v-validate="'required'"
      />
      <div class="alert alert-danger" role="alert" v-if="errors.has('asabn')">Username is required!</div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          name="pass"
          v-model="user.pass"
          v-validate="'required'"
        />
        <div class="alert alert-danger" role="alert" v-if="errors.has('pass')">Password is required!</div>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Login" @click="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/models/user";
import axios from "axios";
import vuex, { mapActions } from "vuex";

export default {
  name: "login",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  data() {
    return {
      user: new User("", "", ""),
      loading: false,
      message: ""
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    setCompanyCode(companyCode) {
      this.user.companyCode = companyCode;
    },
    // onSubmit() {
    //   var companyCode = this.companyCode;
    //   var asabn = this.asabn;
    //   var pass = this.pass;

    //   this.$store
    //     .dispatch("LOGIN", { companyCode, asabn, pass })
    //     .then(() => this.redirect())
    //     .catch(({ message }) => (this.msg = message));
    // },
    // redirect() {
    //   const { search } = window.location;
    //   const tokens = search.replace(/^\?/, "").split("&");
    //   const { returnPath } = tokens.reduce((qs, tkn) => {
    //     const pair = tkn.split("=");
    //     qs[pair[0]] = decodeURIComponent(pair[1]);
    //     return qs;
    //   }, {});
    //   // 리다이렉트 처리
    //   this.$router.push(returnPath);
    // },

    onSubmit() {
      this.loading = true;
      this.$validator.validateAll();

      if (this.errors.any()) {
        this.loading = false;
        return;
      }

      if (this.user.companyCode && this.user.asabn && this.user.pass) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/profile");
          },
          error => {
            this.loading = false;
            this.message = error.message;
          }
        );
      }
    }
  },
  mounted() {
    // this.companyCode = 'SEOHAN';
    document.querySelector("#SEOHAN").click();
    // this.$refs.SEOHAN.click();
  }
};
</script>
<style scoped>
#login {
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
}
</style>
