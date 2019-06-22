import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    install: {
      step: 0,
      projectInfo: {
        aaa: 1111
      },
      nodejsInfo: {
        isInstalled: false,
        version: "",
        path: "",
      },
      gitInfo: {
        isInstalled: false,
        version: "",
        path: "",
      },
      pm2Info: {
        isInstalled: false,
        version: "",
        select: 1
      },
      nextDisabled: true,
      prevDisabled: false,
    },
    setting: {
      port: "",
      secret: ""
    }

  },
  mutations: {
    setStep(state, num) {
      state.install.step = num;
    }
  },
  actions: {}
});
