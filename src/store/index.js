import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataArray: [],
  },

  mutations: {
    pushData(state, dataActions) {
      state.dataArray = dataActions;
    },
  },

  actions: {
    getData: async ({ commit }) => {
      try {
        const data = await fetch("https://restcountries.eu/rest/v2/all");
        const dataArray = await data.json();
        commit("pushData", dataArray);
      } catch (error) {
        alert(error);
      }
    },
  },

  modules: {},
});
