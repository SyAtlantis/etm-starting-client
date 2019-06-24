<template>
  <div class="step1">
    <div class="step-content">
      <a-form :form="form">
        <a-form-item label="Nodejs" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <QueryInfo :func="getNodejsInfo" name="nodejsInfo">
            <BrowseFolder name="nodejsInfo"/>
          </QueryInfo>
        </a-form-item>
        <a-form-item label="Git" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <QueryInfo :func="getGitInfo" name="gitInfo">
            <BrowseFolder name="gitInfo"/>
          </QueryInfo>
        </a-form-item>
        <a-form-item label="PM2" :labelCol="{span: 4}" :wrapperCol="{span: 18}" :required="false">
          <QueryInfo :func="getPm2Info" name="pm2Info">
            <a-radio-group :value="pm2Info.select" @change="change">
              <a-radio :value="1">全局安装</a-radio>
              <a-radio :value="2">项目内安装</a-radio>
            </a-radio-group>
          </QueryInfo>
        </a-form-item>
      </a-form>
    </div>
    <div class="step-footer">
      <a-button class="footer-btn" type="primary" @click="cancle" :disabled="false">取消</a-button>
      <a-button class="footer-btn" type="primary" @click="next" :disabled="nextDisabled">下一步</a-button>
    </div>
  </div>
</template>

<script>
import QueryInfo from "../components/QueryInfo";
import BrowseFolder from "./BrowseFolder";

import { install } from "../modules";

export default {
  name: "step1",
  components: { QueryInfo, BrowseFolder },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  computed: {
    nodejsInfo() {
      return this.$store.state.install.nodejsInfo;
    },
    gitInfo() {
      return this.$store.state.install.gitInfo;
    },
    pm2Info() {
      return this.$store.state.install.pm2Info;
    },
    nextDisabled() {
      if (this.$store.state.install.step !== 1) {
        return true;
      }
      if (
        (!this.nodejsInfo.isInstalled && this.nodejsInfo.path == "") ||
        (!this.gitInfo.isInstalled && this.gitInfo.path == "")
      ) {
        return true;
      }

      return false;
    }
  },
  methods: {
    change(e) {
      this.$store.state.install.pm2Info.select = e.target.value;
    },
    cancle() {
      this.$store.state.install.step = 0;
    },
    next() {
      this.$store.state.install.step = 2;
    },

    getNodejsInfo() {
      return install.getNodejsInfo();
    },
    getGitInfo() {
      return install.getGitInfo();
    },
    getPm2Info() {
      return install.getPm2Info();
    }
  }
};
</script>

<style lang="less">
.step1 {
  width: 100%;
  height: 100%;

  .step-content {
    height: calc(100% - 32px);
  }

  .step-footer {
    height: 32px;
    display: flex;
    justify-content: space-between;

    .footer-btn {
      width: 80px;
      height: 32px;
    }
  }
}

.step1-form-deploy {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
