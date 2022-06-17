import axios from "axios";

export const form = {
  namespaced: true,
  state: {
    allCars: [],
    loading: null,
    apiError: null,

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
    setForm(state, payload) {
      state.formDetails = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setApiError(state, payload) {
      state.apiError = payload;
    },
  },
  getters: {
    getForm: (state) => state.formDetails,
    getCars: (state) => state.allCars,
    getLoading: (state) => state.loading,
    getApiError: (state) => state.apiError,
  },
  actions: {
    // This is used for Asunchronous
    setLoading: ({ commit }, payload) => commit("setLoading", payload),
    setApiError: ({ commit }, payload) => commit("setApiError", payload),
    setForm: ({ commit }, payload) => commit("setForm", payload),

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
          commit("setForm", (this.state.form.formDetails.showForm = false));
          return res;
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setForm", (this.state.form.formDetails.showForm = false));
          return err;
        });
      return res;
    },

    async editCarDetails({ commit, dispatch }, payload) {
      commit("setLoading", true);
      const res = await axios
        .put(
          `https://testapi.io/api/dartya/resource/cardata/${payload.id}`,
          payload
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch("fetchCarDetails");
          }
          commit("setLoading", false);
          commit("setForm", (this.state.form.formDetails.showForm = false));
          return res;
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setForm", (this.state.form.formDetails.showForm = false));
          return err;
        });
      return res;
    },

    async deleteCarDetails({ commit, dispatch }, payload) {
      commit("setLoading", true);
      const res = await axios
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

    // end of action part
  },
};
