<template>
  <div class="Form_container">
    <div>

      <Form class="form_section" @submit="onSubmit" :validation-schema="schema">
        <br />
        <h2>User Login</h2>
        <div>
          <div>
            <label class="form-label">Email: &nbsp; </label>
            <Field name="email" type="text" class="form-control" placeholder="Enter Email address" />
            <ErrorMessage name="email" class="text-danger" />
          </div>
          <div>
            <label class="form-label"> Password: &nbsp;</label>
            <Field name="password" type="password" class="form-control" placeholder="Enter Password" />
            <ErrorMessage name="password" class="text-danger" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <span><br />&nbsp;</span>
      </Form>

      <router-link to="/signup">
        <p class="login_text">Signup now!!</p>
      </router-link>

      <div v-show="loading || isErrorFound">
        <transition @before-enter="beforeEnter" @enter="enter" appear mode="out-in">
          <span class="text-danger" v-if="loading">
            We are checking the credentials please wait...
          </span>
          <span class="text-danger" v-else-if="isErrorFound">
            ** User is not available! Please Signup vv
          </span>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import gsap from 'gsap';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "UserLogin",
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translatex(10px)";
      el.style.scale = 0.5;
    }
    const enter = (el, done) => {
      gsap.to(el,
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          onComplete: done,
        })
    }
    return {
      beforeEnter,
      enter
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().email().required("email is Required*"),
      password: yup.string().required("Password is Required"),
    });
    return {
      schema,
      isUserAuth: JSON.parse(localStorage.getItem("userAuth")),
    };
  },
  computed:{
    ...mapGetters({
      loading: 'getLoading',
      isErrorFound: 'getApiError',
    })
  },
  methods: {
    ...mapActions({
      loginUser: 'loginUser',
    }),
    async onSubmit(values) {
      await this.loginUser(values);
    },
  },
};
</script>

<style scoped>
.errHand-enter-to,
.errHand-leave-from {
  opacity: 0;
  transform: translatey(-10px);
}

.errHand-leave-to,
.errHand-enter-from {
  opacity: 1;
  transform: translatey(0px);
}

.errHand-enter-active,
.errHand-leave-active {
  transition: all 0.3s ease;
}

.form_section>div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.error_class {
  position: absolute;
  left: 10%;
}

.error_class2 {
  position: absolute;
  left: 10%;
  top: 20%;
}

.Form_container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: rgb(230, 211, 247);
  height: 60vh;
}

.form_section>div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.form_section>div>div {
  margin: 10px 0;
  background-color: antiquewhite;
}

.flex_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input_element {
  background-color: white;
}

a {
  text-decoration: none;
}
</style>
