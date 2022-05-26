import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "loginComponent" */ "../views/UserLogin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(
        /* webpackChunkName: "signupComponent" */ "../views/UserSignUp.vue"
      ),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(
        /* webpackChunkName: "galleryComponent" */ "../components/GalleryCard.vue"
      ),
  },
  {
    path: "/car/:id",
    name: "Car",
    component: () =>
      import(/* webpackChunkName: "myCarComponent" */ "../views/MyCar.vue"),
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

export default router;
