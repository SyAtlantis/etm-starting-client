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
      publicIp: "",
      port: "",
      secret: ""
    },
    monitor: {
      netInfo: {
        status: "error",
        errInfo: "无法获取到网络链接状态！刷新重试！",
        data: {
          publicIp: "",
          port: ""
        }
      },
      gpuInfo: {
        status: "error",
        errInfo: "无法获取到显卡状态！刷新重试！",
        data: {}
      },
      procInfo: {
        status: "error",
        errInfo: "无法获取到进程状态！刷新重试！",
        data: {}
      },
      syncInfo: {
        status: "loading",
        errInfo: "无法获取到同步状态！刷新重试！",
        data: {}
      },
      blockInfo: {
        status: "normal",
        errInfo: "无法获取到出块状态！刷新重试！",
        data: {}
      }
    }
  },
  mutations: {
    setStep(state, num) {
      state.install.step = num;
    }
  },
  actions: {}
});
