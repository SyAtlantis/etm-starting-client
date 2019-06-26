<template>
  <a-spin class="setting" :spinning="spinning" tip="保存中...">
    <div class="setting-content">
      <a-form>
        <a-form-item label="公网IP" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-input-search placeholder="请输入公网IP!" v-model="publicIp">
            <a-icon slot="enterButton" type="sync" @click="getIp"/>
          </a-input-search>
        </a-form-item>
        <a-form-item label="端口号" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <a-input placeholder="请输入端口号!" v-model="port"/>
        </a-form-item>
        <a-form-item label="Secret" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-textarea :rows="4" placeholder="请输入Secret!【非受托人无需输入】" v-model="secret"/>
        </a-form-item>
      </a-form>
    </div>
    <div class="setting-button">
      <a-button type="primary" @click="save" :disabled="port==''">保存</a-button>
      <a-button type="primary" @click="cancle">取消</a-button>
    </div>
  </a-spin>
</template>

<script>
// import SettingContent from "../components/SettingContent";
import { setting } from "../modules";

export default {
  name: "setting",
  components: {},
  data() {
    return {
      publicIp: this.$store.state.setting.publicIp,
      port: "4096",
      secret: "",
      spinning: false
    };
  },
  computed: {},
  methods: {
    save() {
      this.spinning = true;

      let publicIp =
        this.$store.state.setting.publicIp !== this.publicIp
          ? this.publicIp
          : "";
      let port = this.$store.state.setting.port !== this.port ? this.port : "";
      let secret =
        this.$store.state.setting.secret !== this.secret ? this.secret : "";

      let data = {
        publicIp,
        port,
        secret
      };
      setting
        .setVulue(data)
        .then(res => {
          console.log(res);
          this.spinning = false;
          this.$store.state.setting.publicIp = this.publicIp;
          this.$store.state.setting.port = this.port;
          this.$store.state.setting.secret = this.secret;
        })
        .catch(err => {
          console.log(err);
          this.spinning = false;
        });
    },
    cancle() {
      this.publicIp = this.$store.state.setting.publicIp;
      this.port = this.$store.state.setting.port;
      this.secret = this.$store.state.setting.secret;
    },
    getIp() {
      if (this.$store.state.monitor.netInfo.data.publicIp !== this.publicIp) {
        this.publicIp = this.$store.state.monitor.netInfo.data.publicIp;
      }
      return this.$store.state.setting.publicIp;
    }
  }
};
</script>

<style lang="less">
.setting {
  height: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;

  .setting-content {
    padding-top: 20px;
  }

  .setting-button {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
