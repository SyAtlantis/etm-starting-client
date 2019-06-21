<template>
  <div class="step1">
    <div class="step1-content">
      <a-form :form="form">
        <a-form-item
          label="Nodejs"
          :labelCol="{span: 4}"
          :wrapperCol="{span: 18}"
          :required="!nodejsInfo.isInstalled"
        >
          <Loading :loadFunc="getNodejsInfo">
            <BrowseFolder/>
          </Loading>
        </a-form-item>
        <a-form-item
          label="Git"
          :labelCol="{span: 4}"
          :wrapperCol="{span: 18}"
          :required="!gitInfo.isInstalled"
        >
          <Loading :loadFunc="getGitInfo">
            <BrowseFolder/>
          </Loading>
        </a-form-item>
        <a-form-item label="PM2" :labelCol="{span: 4}" :wrapperCol="{span: 18}" :required="false">
          <Loading :loadFunc="getPm2Info">
            <a-radio-group v-model="pm2value">
              <a-radio :value="1">全局安装</a-radio>
              <a-radio :value="2">项目安装</a-radio>
            </a-radio-group>
          </Loading>
        </a-form-item>
      </a-form>
    </div>
    <div class="step1-footer">
      <a-button class="footer-btn" type="primary" @click="cancle">取消</a-button>
      <a-button class="footer-btn" type="primary" @click="next" :disabled="nextDisabled">下一步</a-button>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import BrowseFolder from "./BrowseFolder";

import { install } from "../modules";

export default {
  name: "step1",
  components: { Loading, BrowseFolder },
  data() {
    return {
      form: this.$form.createForm(this),
      // deploy: {
      //   nodejs: {
      //     isInstalled: false,
      //     version: "1.0.1"
      //   },
      //   git: {
      //     isInstalled: false,
      //     version: "1.0.1"
      //   },
      //   pm2: {
      //     isInstalled: false,
      //     version: "1.0.1"
      //   }
      // },
      pm2value: 1,
      // nodejsPath: "",
      // nodejsLoading: true,
      // gitLoading: true,
      // pm2Loading: true,
      nextDisabled: true
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
    }
  },
  // created() {
  //   (async () => {
  //     const p1 = install.getNodejsInfo().then(data => {
  //       this.nodejsLoading = false;

  //       if (data) {
  //         this.deploy.nodejs.isInstalled = data.isInstalled;
  //         this.deploy.nodejs.version = data.version;
  //       }
  //     });

  //     const p2 = install.getGitInfo().then(data => {
  //       this.gitLoading = false;

  //       if (data) {
  //         this.deploy.git.isInstalled = data.isInstalled;
  //         this.deploy.nodejs.version = data.version;
  //       }
  //     });

  //     const p3 = install.getPm2Info().then(data => {
  //       this.pm2Loading = false;

  //       if (data) {
  //         this.deploy.pm2.isInstalled = data.isInstalled;
  //         this.deploy.nodejs.version = data.version;
  //       }
  //     });

  //     await p1;
  //     await p2;
  //     await p3;
  //   })()
  //     .then(() => {
  //       this.checkNext();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.checkNext();
  //     });
  // },
  mounted() {
    this.checkNext();
  },
  methods: {
    checkNext() {
      let disable = true;
      if (this.$store.state.install.step !== 1) {
        disable = false;
      }
      if (this.nodejsInfo.isInstalled && this.gitInfo.isInstalled) {
        disable = false;
      }

      return disable;
    },
    onchange(v) {
      console.log(v);
    },
    preview(file) {
      console.log(file);
    },
    select() {
      console.log("select");
    },

    cancle() {},
    next() {},

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

  .step1-content {
    height: calc(100% - 32px);
  }

  .step1-footer {
    height: 32px;
    display: flex;
    justify-content: space-between;

    .footer-btn {
      width: 80px;
    }
  }
}

.step1-form-deploy {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
