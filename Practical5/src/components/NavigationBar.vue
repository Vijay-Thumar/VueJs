<template>
  <div class="navigation_bar">
    <div>The VueJs</div>
    <div class="navigation">
      <nav>
        <span v-if="isUserAuth" class="another_buttons"
          ><button @click="logoutClickHandler">Log Out</button></span
        >
        <span v-if="!isUserAuth">
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </span>
        <span v-if="!isUserAuth">
          <router-link :to="{ name: 'Signup' }">Signup</router-link>
        </span>
        <span v-if="isUserAuth">
          <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
        </span>
      </nav>
    </div>
    <div>
      <span style="min-width: 120px; display: block">&NonBreakingSpace;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isUserAuth: JSON.parse(localStorage.getItem("userAuth")),
    };
  },
  mounted() {
    if (this.isUserAuth === null || this.isUserAuth === "") {
      localStorage.setItem("userAuth", false);
    }
    setInterval(() => {
      this.isUserAuth = JSON.parse(localStorage.getItem("userAuth"));
    }, 10);
  },
  methods: {
    logoutClickHandler() {
      localStorage.setItem("userAuth", false);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navigation_bar {
  min-width: 100%;
  background-color: rgb(84, 197, 241);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
  /* border-radius: 50px; */
  padding: 0 80px;
  margin-top: 2px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
}

.navigation a {
  color: rgb(141, 141, 141);
  text-decoration: none;
  margin-left: 20px;
}

.navigation a.router-link-active {
  color: rgb(26, 26, 26);
  font-weight: bold;
}

.navigation a:hover {
  color: #000;
  font-weight: bold;
  text-decoration: none;
}

.another_buttons {
  color: rgb(141, 141, 141);
  text-decoration: none;
  margin-left: 20px;
}

button {
  text-decoration: none;
  border: none;
  background-color: rgba(221, 51, 221, 0);
  color: rgb(141, 141, 141);
  font-weight: bold;
}

button:hover {
  color: #000;
  font-weight: bold;
  text-decoration: none;
}
</style>

<style>
*{
  box-sizing: border-box;
}
</style>