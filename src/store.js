import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    install: {
      step: 0,
      etmInfo: {
        status: "uninstalled",
        version: "",
      },
      nodejsInfo: {
        status: "uninstalled",
        version: "",
      },
      pm2Info: {
        status: "uninstalled",
        version: "",
      },
      nextDisabled: true,
      prevDisabled: false,
    },
    setting: {
      publicIp: "",
      port: "4096",
      secret: ""
    },
    monitor: {
      netInfo: {
        status: "error",
        message: "无法获取到网络链接状态！刷新重试！",
        data: {
          publicIp: "",
          port: ""
        }
      },
      gpuInfo: {
        status: "error",
        message: "无法获取到显卡状态！刷新重试！",
        data: {}
      },
      procInfo: {
        status: "error",
        message: "无法获取到进程状态！刷新重试！",
        data: {}
      },
      syncInfo: {
        status: "loading",
        message: "无法获取到同步状态！刷新重试！",
        data: {}
      },
      blockInfo: {
        status: "normal",
        message: "无法获取到出块状态！刷新重试！",
        data: {}
      }
    },
    control: {
      start: false,
      pause: false,
      boot: false
    }
  },
  mutations: {
    setStep(state, num) {
      state.install.step = num;
    }
  },
  actions: {}
});
