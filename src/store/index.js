import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataArray: [],
    toggleModal: false,
  },

  mutations: {
    pushData(state, dataActions) {
      state.dataArray = dataActions;
    },
  },

  actions: {
    getData: async ({ commit }) => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const dataArray = await data.json();
      commit("pushData", dataArray);
    },
  },

  modules: {},
});
