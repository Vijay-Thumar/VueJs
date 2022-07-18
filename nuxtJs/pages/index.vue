<template>
  <Login />
</template>

<script>
import Cookie from "js-cookie";
import Login from './login/index.vue';
export default {
  name: "IndexPage",
  components: { Login },
  middleware: ["auth", "notAuth"],

  mounted() {
    if (Cookie.get("jwt")) {
      this.$store.commit("setIsAuth", true);
    } else {
      this.$store.commit("setIsAuth", false);
    }
  }
}
</script>
