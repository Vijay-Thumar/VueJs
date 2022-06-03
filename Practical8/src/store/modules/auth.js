import axios from "axios";

import router from "@/router";
// import jwtDecode from "jwt-decode";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export const auth = {
  namespaced: true,
  state: {
    authUserName: null,
    userAuth: cookies.isKey("localHostHelper"),
    authData: null,
  },
  getters: {
    getAuthUserName: (state) => state.authUserName,
    getUserAuth: (state) => state.userAuth,
    getAuthData: (state) => state.authData,
  },
  mutations: {
    setAuthUserName: (state, payload) => (state.authUserName = payload),
    setUserAuth: (state, payload) => (state.userAuth = payload),
    setAuthData: (state, payload) => (state.authData = payload),
  },
  actions: {
    // Normal State Change through Actions
    setAuthUserName: ({ commit }, payload) =>
      commit("setAuthUserName", payload),
    setUserAuth: ({ commit }, state, payload) =>
      commit("setUserAuth", state, payload),
    setAuthData: ({ commit }, payload) => commit("setAuthData", payload),

    //  Signup Authentication
    async signupUser({ commit }, payload) {
      commit(`form/setLoading`, true, { root: true });
      const response = await axios
        .post("https://testapi.io/api/dartya/resource/users", payload)
        .then((response) => {
          if (response.status == 201) {
            return response;
          }
          commit(`form/setLoading`, false, { root: true });
        })
        .catch((error) => {
          commit(`form/setLoading`, false, { root: true });
          return error;
        });
      return response;
    },

    async signUpAuth({ commit }, payload) {
      let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      const responce = await axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMqr-HOyT20vX5G6JERq7J3BTpZzIDD6A`,
          postData
        )
        .then((res) => {
          commit(`setAuthData`, res.data);
          commit(`form/setLoading`, false, { root: true });
          router.push("/");
          return res;
        })
        .catch((err) => {
          commit(`form/setLoading`, false, { root: true });
          commit(`form/setApiError`, err, { root: true });
          return err;
        });
      return responce;
    },

    // Login Authentication

    async loginUser({ commit }, payload) {
      commit(`form/setLoading`, true, { root: true });
      const response = await axios
        .get("https://testapi.io/api/dartya/resource/users")
        .then((res) => {
          let allusers = res.data.data;
          let user = allusers.find((user) => {
            return (
              user.email == payload.email && user.password == payload.password
            );
          });
          if (user == undefined) {
            commit(`form/setLoading`, false, { root: true });
            commit(`form/setApiError`, true, { root: true });
            return res.status = 404;
          } else {
            
            return res;
          }
        })
        .catch((err) => {
          commit(`form/setLoading`, false, { root: true });
          return err;
        });
      return response;
    },

    async callAuth({ commit }, payload) {
      let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      const userName = payload.email.split("@")[0];
      const responce = await axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMqr-HOyT20vX5G6JERq7J3BTpZzIDD6A`,
          postData
        )
        .then((res) => {
          if (res.status === 200) {
            commit(`setAuthUserName`, userName);
            commit(`setUserAuth`, res.data.email);
            cookies.set("localHostHelper", res.data.email);
            commit(`form/setLoading`, false, { root: true });
            router.push("/gallery");
            return res;
          }
          else{
            return res;
          }
        })
        .catch((err) => {
          commit(`form/setLoading`, false, { root: true });
          return err;
        });
      return responce;
    },
    // End of action methods
  },
};
