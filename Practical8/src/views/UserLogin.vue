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
        <div v-if="loading || isErrorFound">
          <transition @before-enter="beforeEnter" @enter="enter" appear mode="out-in">
            <span class="text-danger" v-if="loading">
              We are checking the credentials please wait...
            </span>
            <span class="text-danger" v-else-if="isErrorFound">
              User is not available! Please Signup
            </span>
          </transition>
        </div>
        <div v-else><br></div>
        <br>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import gsap from 'gsap';
import { mapGetters } from 'vuex';
import { useCookies } from "vue3-cookies";

export default {
  name: "UserLogin",
  setup() {
    const { cookies } = useCookies();

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
      enter,
      cookies,
    }
  },
  mounted() {
    this.cookies.remove("localHostHelper")
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
    onSubmit(values) {
      // this.$store.dispatch('loginUser', values)
      const promise = this.$store.dispatch("loginUser", values);
      promise
        .then((res) => {
          if (res.status === 200) {
            console.log('if section')
            this.$toast.success(`Login successful`, {
              position: "top-right",
              duration: 1500,
            });
          } else {
            this.$toast.error(`User Not Found`, {
              position: "top-right",
              duration: 1500,
            });
            setTimeout(() => {
              this.$store.dispatch('setApiError', false)
            }, 1700);
          }
        })
        .catch((error) => {
          console.log('err section')
          this.$toast.error(error.message, {
            position: "top-right",
            duration: 2000,
          });
        });
    },
  },
};
</script>

<style scoped>
.form_container {
  background: linear-gradient(to right, #ff99ff 0%, #99ccff 100%);
  border-radius: 24px;

}

.body_container {
  /* background: linear-gradient(to left, #ff99ff 0%, #99ccff 100%); */
  height: 100vh;
}

a {
  text-decoration: none;
}
</style>