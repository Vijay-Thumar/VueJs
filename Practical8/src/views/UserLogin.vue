<template>
  <div class="body_container">
    <div class="container-sm">
      <Form class="form_container" @submit="onSubmit" :validation-schema="schema">
        <h2 class="margin_tb mb-3 pt-3">User Login</h2>
        <div class="row mb-4">
          <div class="col"><label class="form-label">Email: &nbsp; </label></div>
          <div class="col">
            <Field name="email" type="text" class="form-control" placeholder="Enter Email address" />
          </div>
          <div class="col">
            <ErrorMessage name="email" class="text-danger" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col"><label class="form-label"> Password: &nbsp;</label></div>
          <div class="col">
            <Field name="password" type="password" class="form-control" placeholder="Enter Password" />
          </div>
          <div class="col">
            <ErrorMessage name="password" class="text-danger" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-4">Login</button>
        <router-link to="/signup">
          <p class="login_text">Signup now!!</p>
        </router-link>
        <br>
      </Form>
      <div v-show="loading || isErrorFound">
        <transition @before-enter="beforeEnter" @enter="enter" appear mode="out-in">
          <span class="text-danger" v-if="loading">
            We are checking the credentials please wait...
          </span>
          <span class="text-danger" v-else-if="isErrorFound">
            User is not available! Please Signup
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
      email: yup.string().email().required("Email is Required*"),
      password: yup.string().required("Password is Required"),
    });
    return {
      schema,
    };
  },
  computed: {
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
.form_container {
  /* background-color: rgb(210, 252, 167); */
  background: linear-gradient(to right, #ff99ff 0%, #99ccff 100%);
  border-radius: 24px;

}

.body_container {
  /* background-color: rgba(104, 158, 112, 0.407); */
  background-color: rgba(104, 158, 112, 0.407);
  background: linear-gradient(to left, #ff99ff 0%, #99ccff 100%);

  height: 100vh;
}

a {
  text-decoration: none;
}
</style>