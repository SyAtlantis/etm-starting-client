<template>
  <div class="control">
    <!-- <a-card title="环境状态" class="control-env"> -->
    <div class="control-env">
      <div class="env-title">
        <strong>运行环境状态 :</strong>
      </div>
      <!-- <a-divider dashed/> -->
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
        <a-form-item v-else label="参数设置" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <div v-if="isSetted">
            <a-tag class="evn-setting" color="#87d068">已设置</a-tag>
            <span>可进入设置页面修改！</span>
          </div>
          <div v-else>
            <a-tag class="evn-setting" color="#e56255">未设置</a-tag>
            <span>请先进入设置页面设置！</span>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <!-- </a-card> -->

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
import { install, control } from "../modules";

export default {
  name: "control",
  components: { QueryInfo },
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
    canStart() {
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
    start() {
      control
        .start()
        .then(res => {
          console.log(res);
          this.$store.state.control.start = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    pause() {
      control
        .pause()
        .then(res => {
          console.log(res);
          this.$store.state.control.pause = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    stop() {
      control
        .stop()
        .then(res => {
          console.log(res);
          this.$store.state.control.start = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less">
.control-env {
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;

  .env-title {
    padding: 10px;
    font-size: 16px;
    align-items: center;
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
}

.control-btn {
  width: 100%;
  margin: 24px 0 0 0;
  // background: rgb(190, 200, 200);

  .btn {
    width: 33.33%;
    height: 100px;
    font-size: 24px;
  }
}
</style>
