import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      allCars: [],
      loading: false,
      apiError: false,
      authToken: false,
      isAuth: null,
      formDetails: {
        showForm: false,
        formHeading: "",
        formAction: "",
        formInitialValue: {
          id: 0,
          name: "",
          details: "",
          image: "",
          price: null,
        },
      },
    },

    getters: {
      getForm: (state) => state.formDetails,
      getIsAuth(state) {
        // state.isAuth = state.authToken != null;
        return state.isAuth;
      },
      getAuthToken: (state) => state.authToken,
      getAllCars: (state) => state.allCars,
      getLoading: (state) => state.loading,
      getApiError: (state) => state.apiError,
    },

    mutations: {
      setForm: (state, payload) => (state.formDetails = payload),
      setAllCars: (state, payload) => (state.allCars = payload),
      setLoading: (state, payload) => (state.loading = payload),
      setApiError: (state, payload) => (state.apiError = payload),
      setIsAuth: (state, payload) => (state.isAuth = payload),
      setAuthToken: (state, payload) => (state.authToken = payload),
      clearToken: (state, payload) => (state.authToken = payload),
    },

    actions: {
      // setLogoutTimer(vuexContext, duration) {
      //   setTimeout(() => {
      //     vuexContext.dispatch("logout");
      //   }, duration);
      // },

      initAuth(vuexContext, req) {
        let token;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
        } else {
          token = localStorage.getItem("token");
          vuexContext.commit("setAuthToken", token);
        }
      },

      logout(vuexContext) {
        vuexContext.commit("clearToken");
        vuexContext.commit("setIsAuth", false);
        this.$cookies.remove("jwt");
        if (process.client) {
          localStorage.removeItem("token");
        }
      },

      setForm: (vueContext, payload) => {
        vueContext.commit("setForm", payload);
      },

      async fetchCarDetails(vueContext) {
        vueContext.commit("setLoading", "start_loading_allcar");
        await this.$axios
          .$get(`${process.env.carApi}`)
          .then((res) => {
            vueContext.commit("setAllCars", res.data);
            vueContext.commit("setLoading", false);
          })
          .catch((err) => {
            vueContext.commit("setApiError", err.message);
            vueContext.commit("setLoading", false);
          });
      },

      async fetchMyCar(vueContext, id) {
        vueContext.commit("setLoading", "loadingMyCar");
        await this.$axios
          .$get(`${process.env.carApi}/${id}`)
          .then((res) => {
            vueContext.commit("setAllCars", res);
            vueContext.commit("setLoading", "showMyCar");
          })
          .catch((err) => {
            vueContext.commit("setApiError", err);
            vueContext.commit("setLoading", "showMyCar");
          });
      },

      async postCarDetails(vueContext, payload) {
        vueContext.commit("setLoading", true);
        const res = await this.$axios
          .$post(`${process.env.carApi}`, payload)
          .then((res) => {
            vueContext.dispatch("fetchCarDetails");
            vueContext.commit("setLoading", false);
            vueContext.commit(
              "setForm",
              (this.state.formDetails.showForm = false)
            );
            return res;
          })
          .catch((err) => {
            vueContext.commit("setLoading", false);
            vueContext.commit(
              "setForm",
              (this.state.formDetails.showForm = false)
            );
            return err;
          });
        return res;
      },

      async editCarDetails(vueContext, payload) {
        vueContext.commit("setLoading", true);
        const res = await this.$axios
          .$put(`${process.env.carApi}/${payload.id}`, payload)
          .then((res) => {
            vueContext.dispatch("fetchCarDetails");
            vueContext.commit("setLoading", false);
            vueContext.commit(
              "setForm",
              (this.state.formDetails.showForm = false)
            );
            return res;
          })
          .catch((err) => {
            vueContext.commit("setLoading", false);
            vueContext.commit(
              "setForm",
              (this.state.formDetails.showForm = false)
            );
            return err;
          });
        return res;
      },

      async deleteMyCar(vueContext, id) {
        const res = await this.$axios
          .$delete(`${process.env.carApi}/${id}`)
          .then((res) => {
            vueContext.dispatch("fetchCarDetails");
            vueContext.commit("setLoading", false);
            return res;
          })
          .catch((err) => {
            vueContext.commit("setLoading", false);
            return err;
          });
        return res;
      },

      async loginUser(vueContext, payload) {
        vueContext.commit("setLoading", "userLoginReq");
        let postData = {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        };
        const response = await this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`,
            postData
          )
          .then((res) => {
            vueContext.commit("setAuthToken", res.idToken);
            vueContext.commit("setIsAuth", true);
            localStorage.setItem("token", res.idToken);
            this.$cookies.set("jwt", res.idToken);
            vueContext.commit("setLoading", false);

            return res;
          })
          .catch((err) => {
            vueContext.commit(`setLoading`, false);
            return err;
          });
        return response;
      },

      async signupUser(vueContext, payload) {
        let postData = {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        };
        vueContext.commit(`setLoading`, true);
        const response = await this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`,
            postData
          )
          .then((response) => {
            vueContext.commit(`setLoading`, false);
            return response;
          })
          .catch((error) => {
            vueContext.commit(`setLoading`, false);
            return error;
          });
        return response;
      },
      // Last line of the actions
    },
  });
};

export default createStore;
