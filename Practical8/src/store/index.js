import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
import { useCookies } from "vue3-cookies";
import jwtDecode from "jwt-decode";

const { cookies } = useCookies();

const store = createStore({
  state: {
    allCars: [],
    loading: null,
    apiError: null,

    userAuth: cookies.isKey("localHostHelper"),
    authUserName: null,

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
  mutations: {
    //This is used for Synchronous
    setCars(state, payload) {
      state.allCars = payload;
    },
    setUserAuth(state, payload) {
      state.userAuth = payload;
    },
    setForm(state, payload) {
      state.formDetails = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setApiError(state, payload) {
      state.apiError = payload;
    },
    setAuthUserName(state, payload) {
      state.authUserName = payload;
    },
  },
  getters: {
    getUserAuth: (state) => state.userAuth,
    getForm: (state) => state.formDetails,
    getCars: (state) => state.allCars,
    getLoading: (state) => state.loading,
    getApiError: (state) => state.apiError,
    getAuthUserName: (state) => state.authUserName,
  },
  actions: {
    // This is used for Asunchronous
    setAuthUserName: ({ commit }, payload) =>
      commit("setAuthUserName", payload),
    setLoading: ({ commit }, state, payload) =>
      commit("setLoading", state, payload),
    setApiError: ({ commit }, state, payload) =>
      commit("setApiError", state, payload),
    setUserAuth: ({ commit }, state, payload) =>
      commit("setUserAuth", state, payload),
    setForm: ({ commit }, state, payload) => commit("setForm", state, payload),

    async fetchCarDetails({ commit }) {
      commit("setLoading", true);
      await axios
        .get(`https://testapi.io/api/dartya/resource/cardata`)
        .then((res) => {
          commit("setCars", res.data.data);
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setApiError", err);
          commit("setLoading", false);
        });
    },

    async postCarDetails({ commit, dispatch }, payload) {
      commit("setLoading", true);
      const res = await axios
        .post("https://testapi.io/api/dartya/resource/cardata", payload)
        .then((res) => {
          if (res.status === 201) {
            dispatch("fetchCarDetails");
          }
          commit("setLoading", false);
          commit("setForm", (this.state.formDetails.showForm = false));
          return res;
        })
        .catch((err) => {
          console.log(err)
          commit("setLoading", false);
          commit("setForm", (this.state.formDetails.showForm = false));
          return err;
        });
      return res;
    },

    async editCarDetails({ commit, dispatch }, payload) {
      commit("setLoading", true);
     const res=  await axios
        .put(
          `https://testapi.io/api/dartya/resource/cardata/${payload.id}`,
          payload
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch("fetchCarDetails");
          }
          commit("setLoading", false);
          commit("setForm", (this.state.formDetails.showForm = false));
          return res;
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setForm", (this.state.formDetails.showForm = false));
          return err;
        });
        return res;
    },

    async deleteCarDetails({ commit, dispatch }, payload) {
      commit("setLoading", true);
      const res =await axios
        .delete(`https://testapi.io/api/dartya/resource/cardata/${payload}`)
        .then((res) => {
          if (res.status === 204) {
            dispatch("fetchCarDetails");
          }
          commit("setLoading", false);
          return res;
        })
        .catch((err) => {
          return err;
        });
        return res;
    },

    async signupUser({ commit }, payload) {
      commit("setLoading", true);
      const response = await axios
        .post("https://testapi.io/api/dartya/resource/users", payload)
        .then((response) => {
          if (response.status == 201) {
            router.push("/");
            return response;
          }
          commit("setLoading", false);
        })
        .catch((error) => {
          commit("setLoading", false);
          return error;
        });
      return response;
    },

    async loginUser({ commit, dispatch }, payload) {
      commit("setLoading", true);
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
            commit("setLoading", false);
            commit("setApiError", true);
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
            commit("setAuthUserName", decodedToken.name);
            commit("setUserAuth", true);
            router.push("/gallery");
            commit("setLoading", false);
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },

  modules: {},
});

export default store;