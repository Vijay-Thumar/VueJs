import { createRouter, createWebHashHistory } from "vue-router";
import {auth} from "../store/modules/auth";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "loginComponent" */ "../views/UserLogin.vue"),
    meta: { auth: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(
        /* webpackChunkName: "signupComponent" */ "../views/UserSignUp.vue"
      ),
    meta: { auth: false },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(
        /* webpackChunkName: "galleryComponent" */ "../components/GalleryCard.vue"
      ),
    meta: { auth: true },
  },
  {
    path: "/car/:id",
    name: "Car",
    component: () =>
      import(/* webpackChunkName: "myCarComponent" */ "../views/MyCar.vue"),
    meta: { auth: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "notFound404Component" */ "../views/NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {


  if ("auth" in to.meta && to.meta.auth && !auth.state.userAuth) {
    next("/");
  } else if ("auth" in to.meta && !to.meta.auth && auth.state.userAuth) {
    next("gallery");
  } else {
    next();
  }
});

export default router;
