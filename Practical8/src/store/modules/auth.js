import axios from "axios";

import router from "@/router";
import jwtDecode from "jwt-decode";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export const auth = {
  namespaced: true,
  state: {
    authUserName: null,
    userAuth: cookies.isKey("localHostHelper"),
  },
  getters: {
    getAuthUserName: (state) => state.authUserName,
    getUserAuth: (state) => state.userAuth,
  },
  mutations: {
    setAuthUserName: (state, payload) => (state.authUserName = payload),
    setUserAuth: (state, payload) => (state.userAuth = payload),
  },
  actions: {
    // Normal State Change through Actions
    setAuthUserName: ({ commit }, payload) =>
      commit("setAuthUserName", payload),
    setUserAuth: ({ commit }, state, payload) =>
      commit("setUserAuth", state, payload),

    //  Api Calls
    async signupUser({ commit }, payload) {
      commit(`form/setLoading`, true,{root:true});
      const response = await axios
        .post("https://testapi.io/api/dartya/resource/users", payload)
        .then((response) => {
          if (response.status == 201) {
            router.push("/");
            return response;
          }
          commit(`form/setLoading`, false,{root:true});
        })
        .catch((error) => {
          commit(`form/setLoading`, false,{root:true});
          return error;
        });
      return response;
    },

    async loginUser({ commit, dispatch }, payload) {
      commit(`form/setLoading`, true,{root:true});
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
            commit(`form/setLoading`, false,{root:true});
            commit(`form/setApiError`, true, {root:true});
            return (res.status = 404);
          } else {
            dispatch("callAuth");
            return res;
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      return response;
    },

    async callAuth({ commit }) {
      await axios // https://www.mockbin.org/bin/b9d6e8f7-891d-43e5-91a6-bbe83de60ba8/view --> gui of bin api
        .get("/bin/b9d6e8f7-891d-43e5-91a6-bbe83de60ba8?foo=bar&foo=baz")
        .then((res) => {
          if (res.status === 200) {
            const myToken = cookies.get("localHostHelper");
            const decodedToken = jwtDecode(myToken);
            commit(`auth/setAuthUserName`, decodedToken.name, { root: true });
            commit(`auth/setUserAuth`, true, { root: true });
            router.push("/gallery");
            commit(`form/setLoading`, false,{root:true});
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    // End of action
  },
};
