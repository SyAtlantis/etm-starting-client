<template>
  <div class="control">
    <Layout>
      <a-icon slot="head-left" type="arrow-left"/>
      <a-icon slot="head-right" type="setting"/>
      <div slot="head-center">EnTanMo</div>
      <div slot="body"></div>
      <div slot="foot"></div>
    </Layout>
    <!-- <div class="head">
      <a-button type="primary" ghost @click="openMonitor" icon="appstore"/>
      <a-button type="primary" ghost @click="openSetting" icon="setting"/>
    </div>-->
    <!-- <a-affix offsetTop="10px">
      <a-button type="primary" @click="openSetting" icon="setting"/>
    </a-affix>
    <br>
    <a-affix offsetBottom="10px">
      <a-button type="primary" @click="openMonitor" icon="appstore"/>
    </a-affix>-->
    <!-- <div class="env-title">
      <strong>运行环境 :</strong>
    </div>
    <a-form v-for="item in formList" :key="item.name">
      <a-form-item
        v-if="item.name !='setting'"
        class="env-item"
        :key="item.name"
        :label="item.label"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        :required="item.required"
      >
        <QueryInfo :func1="item.func1" :func2="item.func2" :name="item.name"></QueryInfo>
      </a-form-item>
      <a-form-item v-else label="参数设置" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
        <div v-if="isSetted">
          <Tag3 type="setted"/>
          <span>可进入设置页面修改！</span>
        </div>
        <div v-else>
          <Tag3 type="unsetted"/>
          <span>请先进入设置页面设置！</span>
        </div>
      </a-form-item>
    </a-form>

    <a-divider dashed/>

    <div class="env-title">
      <strong>运行状态 :</strong>
      <Tag3 :type="this.$store.state.control.start?'started':'unstarted'"/>
      <span class="env-title-open" v-if="isInstallAll">
        开机启动
        <a-switch :checked="this.$store.state.control.boot" @change="boot"/>
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
    </a-button-group>-->
  </div>
</template>

<script>
import Layout from "../components/Layout";
import QueryInfo from "../components/QueryInfo";
import Tag3 from "../components/Tag3";
import { install, control } from "../modules";

export default {
  name: "control",
  components: { Layout, QueryInfo, Tag3 },
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
      this.isStarted();
      return true;
    },
    canStart() {
      if (!this.isInstallAll) {
        return false;
      }
      if (this.$store.state.control.start) {
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
    openMonitor() {
      this.$store.state.install.step = 1;
    },
    openSetting() {
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
            console.log(`start success=>${res}`);
            this.$store.state.control.start = true;
          } else {
            // this.$message.warning(
            //   `start failure=>${data.message}`
            // );
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
            console.log(`pause success=>${res}`);
            this.$store.state.control.pause = true;
          } else {
            // this.$message.warning(
            //   `pause failure=>${data.message}`
            // );
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
            console.log(`stop success=>${res}`);
            this.$store.state.control.start = false;
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
              console.log(`set boot success=>${res}`);
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
              console.log(`set unboot success=>${res}`);
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
    isStarted() {
      control
        .isStarted()
        .then(res => {
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            console.log(`get isStarted success=>${res}`);
            this.$store.state.control.start = data.results;
          } else {
            // this.$message.warning(
            //   `get isStarted failure=>${data.message}`
            // );
            console.log(`get isStarted failure=>${data.message}`);
          }
        })
        .catch(err => {
          // this.$message.error(`get isStarted error=>${err}`);
          console.log(`get isStarted error=>${err}`);
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
  // overflow: auto;
  // padding: 8px 24px;

  // .head-icon {
  //   font-size: 30px;
  // }

  .head {
    display: flex;
    justify-content: space-between;
  }

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
    margin: 24px 0 0 0;

    .btn {
      width: 33.33%;
      height: 100px;
      font-size: 24px;
    }
  }
}
</style>
