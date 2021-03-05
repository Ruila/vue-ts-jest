import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    show(state) {
      state.loading = true
    },
  
    hide(state) {
      state.loading = false
    }
  },
  actions: {
    show({commit}) {
      commit('show')
    },
    hide({commit}) {
      commit('hide')
    },
  },
  modules: {}
});
