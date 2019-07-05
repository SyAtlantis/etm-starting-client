<template>
  <div class="control">
    <div class="env-title">
      <strong>运行环境 :</strong>
    </div>
    <a-form v-for="item in formList" :key="item.name">
      <a-form-item
        v-if="item.name !='setting'"
        class="env-item"
        :key="item.name"
        :label="item.label"
        :labelCol="{xs: {span: 4}, sm: {span: 4}}"
        :wrapperCol="{xs: {span: 10}, sm: {span: 20} }"
        :required="item.required"
      >
        <QueryInfo :func1="item.func1" :func2="item.func2" :name="item.name"></QueryInfo>
      </a-form-item>
      <a-form-item
        v-else
        label="参数设置"
        :labelCol="{xs: {span: 4}, sm: {span: 4}}"
        :wrapperCol="{xs: {span: 18}, sm: {span: 18} }"
      >
        <div v-if="isSetted">
          <Tag3 type="setted" />
          <span>可进入设置页面修改！</span>
        </div>
        <div v-else>
          <Tag3 type="unsetted" />
          <span>请先进入设置页面设置！</span>
        </div>
      </a-form-item>
    </a-form>

    <a-divider dashed />

    <div class="env-title">
      <strong>运行状态 :</strong>
      <Tag3 :type="this.$store.state.control.start?'started':'unstarted'" />
      <span class="env-title-open" v-if="isInstallAll">
        开机启动
        <a-switch :checked="this.$store.state.control.boot" @change="boot" />
      </span>
    </div>
    <a-button-group class="control-btn">
      <a-button
        class="btn"
        icon="play-circle"
        type="primary"
        ghost
        :disabled="!canStart"
        @click="start"
      >启动</a-button>
      <a-button
        class="btn"
        icon="pause-circle"
        type="primary"
        ghost
        :disabled="!canPause"
        @click="pause"
      >暂停</a-button>
      <a-button class="btn" icon="stop" type="primary" ghost :disabled="!canStop" @click="stop">停止</a-button>
    </a-button-group>
  </div>
</template>

<script>
import QueryInfo from "../components/QueryInfo";
import Tag3 from "../components/Tag3";
import { install, control } from "../modules";

export default {
  name: "control",
  components: { QueryInfo, Tag3 },
  data() {
    return {
      formList: [
        {
          name: "nodejsInfo",
          label: "Nodejs",
          required: true,
          func1: install.getNodejsInfo,
          func2: install.installNodejs
        },
        {
          name: "pm2Info",
          label: "PM2",
          required: true,
          func1: install.getPm2Info,
          func2: install.installPm2
        },
        {
          name: "etmInfo",
          label: "EnTanMo",
          required: true,
          func1: install.getEntanmoInfo,
          func2: install.installEntanmo
        },
        {
          name: "setting"
        }
      ]
    };
  },
  computed: {
    isSetted() {
      return this.$store.state.setting.port;
    },
    isInstallAll() {
      if (!this.$store.state.setting.port) {
        return false;
      }
      if (this.$store.state.install.etmInfo.status != "installed") {
        return false;
      }
      if (this.$store.state.install.nodejsInfo.status != "installed") {
        return false;
      }
      if (this.$store.state.install.pm2Info.status != "installed") {
        return false;
      }

      this.getStatus();
      this.isboot();

      return true;
    },
    canStart() {
      if (!this.isInstallAll) {
        return false;
      }
      if (this.$store.state.control.start && !this.$store.state.control.pause) {
        return false;
      }
      return true;
    },
    canPause() {
      if (this.$store.state.control.start && !this.$store.state.control.pause) {
        return true;
      }
      return false;
    },
    canStop() {
      if (this.$store.state.control.start) {
        return true;
      }
      return false;
    }
  },
  methods: {
    toMonitor() {
      this.$store.state.install.step = 1;
    },
    toSetting() {
      this.$store.state.install.step = 2;
    },
    start() {
      control
        .start()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`start success=>${data.results}`);
            this.$store.state.control.start = true;
            this.$store.state.control.pause = false;
          } else {
            console.log(`start failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`start error=>${err}`);
          console.log(`start error=>${err}`);
        });
    },
    pause() {
      control
        .pause()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`pause success=>${data.results}`);
            this.$store.state.control.pause = true;
          } else {
            console.log(`pause failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`pause error=>${err}`);
          console.log(`pause error=>${err}`);
        });
    },
    stop() {
      control
        .stop()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`stop success=>${data.results}`);
            this.$store.state.control.start = false;
            this.$store.state.control.pause = false;
          } else {
            // this.$message.warning(
            //   `stop failure=>${data.message}`
            // );
            console.log(`stop failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`stop error=>${err}`);
          console.log(`stop error=>${err}`);
        });
    },
    boot(checked) {
      console.log(checked);
      if (checked) {
        control
          .boot()
          .then(res => {
            let { data } = res;
            if (!data || res.status !== 200) {
              throw new Error("Result data or status error!");
            }

            if (data.success) {
              console.log(`set boot success=>${data.results}`);
              this.$store.state.control.boot = true;
            } else {
              // this.$message.warning(
              //   `set boot failure=>${data.message}`
              // );
              console.log(`set boot failure=>${data.message}`);
            }
          })
          .catch(err => {
            // this.$message.error(`set boot error=>${err}`);
            console.log(`set boot error=>${err}`);
          });
      } else {
        control
          .unboot()
          .then(res => {
            let { data } = res;
            if (!data || res.status !== 200) {
              throw new Error("Result data or status error!");
            }

            if (data.success) {
              console.log(`set unboot success=>${data.results}`);
              this.$store.state.control.boot = false;
            } else {
              // this.$message.warning(
              //   `set unboot failure=>${data.message}`
              // );
              console.log(`set unboot failure=>${data.message}`);
            }
          })
          .catch(err => {
            // this.$message.error(`set unboot error=>${err}`);
            console.log(`set unboot error=>${err}`);
          });
      }
    },
    isboot() {
      control
        .isboot()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`get isboot success=>${data.results}`);
            this.$store.state.control.boot = data.results;
          } else {
            // this.$message.warning(
            //   `get isboot failure=>${data.message}`
            // );
            console.log(`get isboot failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`get isboot error=>${err}`);
          console.log(`get isboot error=>${err}`);
        });
    },
    getStatus() {
      control
        .getStatus()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`get status success=>${data.results}`);
            this.$store.state.control.status = data.results;

            if (data.results === "online") {
              this.$store.state.control.start = true;
            } else if (data.results === "stopped") {
              this.$store.state.control.start = true;
              this.$store.state.control.pause = true;
            } else if (data.results === "error") {
              this.$store.state.control.start = false;
              this.$store.state.control.pause = false;
            }
          } else {
            // this.$message.warning(
            //   `get status failure=>${data.message}`
            // );
            console.log(`get status failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`get status error=>${err}`);
          console.log(`get status error=>${err}`);
        });
    }
  }
};
</script>

<style lang="less">
.control {
  width: 100%;
  height: 100%;
  // border: 1px solid #e8e8e8;
  // border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;

  .env-title {
    padding: 10px;
    font-size: 16px;
    align-items: center;

    .env-title-open {
      float: right;
    }
  }

  .evn-setting {
    width: 65px;
    text-align: center;
    margin: 0 10px;
  }

  .queryinfo-installed {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .control-btn {
    width: 100%;
    // margin: 24px 0 0 0;

    .btn {
      width: 33.33%;
      height: 100px;
      font-size: 24px;
    }
  }
}
</style>
