<template>
  <div class="navigation_bar">
    <transition @before-enter="beforeEnter" @enter="enter" appear>
      <div v-if="authUserName"> Welcome: {{ authUserName }}</div>
      <div v-else>The VueJS</div>
    </transition>

    <div class="navigation">
      <nav>
        <transition @before-enter="beforeEnter" @enter="enter" appear mode="out-in">
          <span v-if="!userLoged">
            <router-link :to="{ name: 'Login' }">Login</router-link>
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </span>
          <span v-else>
            <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
          </span>
        </transition>
      </nav>
    </div>

    <div class="d-flex">
      <div>
        <transition @before-enter="beforeEnter" @enter="enter" appear>
          <span v-if="userLoged" style="min-width: 120px; display: block" class="add_car">
            <button class="btn btn-primary rounded-pill" @click="addCarClickHandler">
              Add new car
            </button>
          </span>
          <span v-else style="min-width: 120px; display: block">
            &NonBreakingSpace;
          </span>
        </transition>
      </div>

      <div>
        <transition @before-enter="beforeEnter" @enter="enter" appear>
          <button v-if="userLoged" class="btn btn-secondary rounded-pill" @click="logoutClickHandler">
            LogOut
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { useCookies } from "vue3-cookies";
import { mapGetters } from "vuex";
export default {
  name: "NavigationBar",
  setup() {
    const { cookies } = useCookies();
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translatex(10px)";
      el.style.scale = 0.5;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "bounce.out",
        scale: 1,
        onComplete: done,
      });
    };

    return {
      beforeEnter,
      enter,
      cookies,
    };
  },
  computed: {
    ...mapGetters({
      authUserName: `auth/getAuthUserName`,
      userLoged: `auth/getUserAuth`,
    }),
  },
  methods: {
    logoutClickHandler() {
      this.$store.dispatch(`auth/setAuthUserName`, null);
      this.$store.dispatch(`auth/setUserAuth`, false)
      this.cookies.remove("localHostHelper")
      this.$toast.success('logout successful', {
              position: 'bottom-right',
              duration: 2000
            })
      this.$router.push("/");
    },
    addCarClickHandler() {
      const formDetails = {
        showForm: true,
        formHeading: "Add Car",
        formAction: "add",
        formInitialValue: {
          id: 0,
          name: "",
          details: "",
          image: "",
          price: null,
        },
      };
      this.$store.dispatch(`form/setForm`, formDetails);
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
</style>

<style>
* {
  box-sizing: border-box;
}
</style>
