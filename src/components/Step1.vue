<template>
  <div class="step1">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        label="Nodejs"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        :required="!deploy['nodejs'].isInstalled"
      >
        <a-spin :spinning="nodejsLoading">
          <div v-if="deploy['nodejs'].isInstalled" class="step1-form-deploy">
            <a-tag color="#87d068">已安装</a-tag>
            <div>版本：{{deploy['nodejs'].version}}</div>
          </div>
          <div v-else>
            <BrowseFolder/>
          </div>
        </a-spin>
      </a-form-item>
      <a-form-item
        label="Git"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        :required="!deploy['git'].isInstalled"
      >
        <a-spin :spinning="gitLoading">
          <div v-if="deploy['git'].isInstalled" class="step1-form-deploy">
            <a-tag color="#87d068">已安装</a-tag>
            <div>版本：{{deploy['git'].version}}</div>
          </div>
          <div v-else>
            <BrowseFolder/>
          </div>
        </a-spin>
      </a-form-item>
      <a-form-item label="PM2" :labelCol="{span: 4}" :wrapperCol="{span: 18}" :required="false">
        <a-spin :spinning="pm2Loading">
          <div v-if="deploy['pm2'].isInstalled" class="step1-form-deploy">
            <a-tag color="#87d068">已安装</a-tag>
            <div>版本：{{deploy['pm2'].version}}</div>
          </div>
          <div v-else>
            <a-radio-group v-model="pm2value">
              <a-radio :value="1">全局安装</a-radio>
              <a-radio :value="2">项目安装</a-radio>
            </a-radio-group>
          </div>
        </a-spin>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import BrowseFolder from "./BrowseFolder";

import { install } from "../modules";

export default {
  name: "step1",
  components: { BrowseFolder },
  data() {
    return {
      form: this.$form.createForm(this),
      deploy: {
        nodejs: {
          isInstalled: false,
          version: "1.0.1"
        },
        git: {
          isInstalled: false,
          version: "1.0.1"
        },
        pm2: {
          isInstalled: false,
          version: "1.0.1"
        }
      },
      pm2value: 1,
      nodejsPath: "",
      nodejsLoading: true,
      gitLoading: true,
      pm2Loading: true
    };
  },
  created() {
    (async () => {
      const p1 = install.getNodejsInfo().then(data => {
        this.nodejsLoading = false;

        if (data) {
          this.deploy.nodejs.isInstalled = data.isInstalled;
          this.deploy.nodejs.version = data.version;
        }
      });

      const p2 = install.getGitInfo().then(data => {
        this.gitLoading = false;

        if (data) {
          this.deploy.git.isInstalled = data.isInstalled;
          this.deploy.nodejs.version = data.version;
        }
      });

      const p3 = install.getPm2Info().then(data => {
        this.pm2Loading = false;

        if (data) {
          this.deploy.pm2.isInstalled = data.isInstalled;
          this.deploy.nodejs.version = data.version;
        }
      });

      await p1;
      await p2;
      await p3;
    })()
      .then(() => {
        this.checkNext();
      })
      .catch(err => {
        console.log(err);
        this.checkNext();
      });
  },
  mounted() {
    this.checkNext();
  },
  methods: {
    checkNext() {
      let disable = true;
      if (this.deploy.nodejs.isInstalled && this.deploy.nodejs.isInstalled) {
        disable = false;
      }

      this.$store.state.install.nextDisabled = disable;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    onchange(v) {
      console.log(v);
    },
    preview(file) {
      console.log(file);
    },
    select() {
      console.log("select");
    }
  }
};
</script>

<style lang="less">
.step1-form-deploy {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
