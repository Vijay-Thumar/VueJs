<template>
  <div class="navigation_bar">
    <div>The VueJs</div>
    <div class="navigation">
      <nav>
        <transition @before-enter="beforeEnter" @enter="enter" appear mode="out-in">
          <span v-if="!isUserAuth">
            <router-link :to="{ name: 'Login' }">Login</router-link>
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </span>
          <span v-else>
            <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
          </span>
        </transition>
      </nav>
    </div>
    <div>
      <span v-if="!isUserAuth" style="min-width: 120px; display: block">&NonBreakingSpace;</span>
      <transition @before-enter="beforeEnter" @enter="enter" appear>
        <button v-if="isUserAuth" class="another_buttons" @click="logoutClickHandler">
          LogOut
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  name: "NavigationBar",
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translatex(10px)";
      el.style.scale = 0.5;
    }
    const enter = (el,done) => {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'bounce.out',
        scale: 1,
        onComplete: done
      })
    }
    
    return {
      beforeEnter,
      enter,
    }
  },
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
    }, 1);
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
* {
  box-sizing: border-box;
}
</style>