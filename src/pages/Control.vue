<template>
  <div class="control">
    <a-card title="环境状态" class="control-env">
      <a-form :form="form">
        <a-form-item label="Nodejs" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <QueryInfo :func="getNodejsInfo" name="nodejsInfo"></QueryInfo>
        </a-form-item>
        <a-form-item label="Git" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <QueryInfo :func="getGitInfo" name="gitInfo"></QueryInfo>
        </a-form-item>
        <a-form-item label="PM2" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <QueryInfo :func="getPm2Info" name="pm2Info"></QueryInfo>
        </a-form-item>
        <a-form-item label="EnTanMo" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <QueryInfo :func="getProjecInfo" name="projectInfo"></QueryInfo>
        </a-form-item>
        <a-form-item
          label="配置设置"
          class="spin"
          :labelCol="{span: 4}"
          :wrapperCol="{span: 18}"
          required
        >
          <div v-if="isSetted">
            <a-tag color="#87d068">已设置</a-tag>
          </div>
          <div v-else>
            <a-tag color="#e56255">未设置</a-tag>
            <span>请先进入设置页面设置！</span>
            <slot class="queryinfo-content"/>
          </div>
        </a-form-item>
      </a-form>
    </a-card>
    <a-button-group class="control-btn">
      <a-button class="btn" icon="play-circle" type="primary" ghost :disabled="!canStart">启动</a-button>
      <a-button class="btn" icon="pause-circle" type="primary" ghost :disabled="!canPause">暂停</a-button>
      <a-button class="btn" icon="stop" type="primary" ghost :disabled="!canStop">停止</a-button>
    </a-button-group>
    <!-- <QueryInfo class="control-content" :func="getProjecInfo" name="projectInfo"></QueryInfo> -->
  </div>
</template>

<script>
import QueryInfo from "../components/QueryInfo";
import { install } from "../modules";

export default {
  name: "control",
  components: { QueryInfo },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  computed: {
    isSetted() {
      return this.$store.state.setting.port && this.$store.state.setting.secret;
    },
    canStart() {
      return true;
    },
    canPause() {
      return true;
    },
    canStop() {
      return true;
    }
  },
  methods: {
    getNodejsInfo() {
      return install.getNodejsInfo();
    },
    getGitInfo() {
      return install.getGitInfo();
    },
    getPm2Info() {
      return install.getPm2Info();
    },
    getProjecInfo() {
      return install.getProjecInfo();
    }
  }
};
</script>

<style lang="less">
.control-env {
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;

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
