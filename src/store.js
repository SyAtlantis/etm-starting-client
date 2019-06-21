import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    install: {
      step: 0,
      nextDisabled: true,
      prevDisabled: false,
    }

  },
  mutations: {
    setStep(state, num) {
      state.install.step = num;
    }
  },
  actions: {}
});
