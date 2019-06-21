import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    install: {
      step: 0,
      projectInfo: {},
      nodejsInfo: {
        isInstalled: false,
        version: ""
      },
      gitInfo: {
        isInstalled: false,
        version: ""
      },
      pm2Info: {
        isInstalled: false,
        version: ""
      },
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
