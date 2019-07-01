<template>
  <a-spin class="setting" :spinning="spinning" tip="保存中...">
    <div class="setting-content">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="公网IP" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-input
            class="input-ip"
            placeholder="请输入公网IP!"
            v-decorator="[
              'publicIp',
              {
                rules: [{
                  type: 'string', message: 'The input is not valid IP',
                }, { 
                  validator: checkPublicIp 
                }],
                initialValue: this.$store.state.setting.publicIp,
              }
            ]"
          />
          <a-button class="button-ip" type="primary" icon="sync" @click="getIp"/>
        </a-form-item>
        <a-form-item label="端口号" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-input
            placeholder="请输入端口号!"
            v-decorator="[
              'port',
              {
                rules: [{
                  type: 'string', message: 'The input is not valid port',
                }, {
                  required: true, message: 'Please input your port!',
                },{ 
                  validator: checkPort 
                }],
                initialValue: this.$store.state.setting.port,
              }
            ]"
          />
        </a-form-item>
        <a-form-item label="Secret" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-textarea
            :rows="4"
            placeholder="请输入Secret!【非受托人无需输入】"
            v-decorator="[
              'secret',
              {
                rules: [{
                  type: 'string', message: 'The input is not valid secret',
                }, ,{ 
                  validator: checkSecret 
                }],
                initialValue: this.$store.state.setting.secret,
              }
            ]"
          />
        </a-form-item>
        <a-form-item :labelCol="{span: 4}" :wrapperCol="{span: 18, offset: 4}">
          <div class="setting-button">
            <a-button type="primary" html-type="submit">保存</a-button>
            <a-button type="primary" @click="cancle">取消</a-button>
          </div>
        </a-form-item>
      </a-form>
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
      form: this.$form.createForm(this),
      // publicIp: this.$store.state.setting.publicIp,
      // port: this.$store.state.setting.port,
      // secret: this.$store.state.setting.secret,
      spinning: false
    };
  },
  computed: {
    canSave() {
      let publicIp = this.form.getFieldValue("publicIp");
      let port = this.form.getFieldValue("port");
      let secret = this.form.getFieldValue("secret");
      console.log(publicIp, port, secret);
      if (publicIp !== this.$store.state.setting.publicIp) {
        return true;
      }
      if (port !== this.$store.state.setting.port && port !== "") {
        return true;
      }
      if (secret !== this.$store.state.setting.secret) {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.save(values);
        }
      });
    },
    save(data) {
      this.spinning = true;

      // let data = {
      //   publicIp: this.publicIp,
      //   port: this.port,
      //   secret: this.secret
      // };
      setting
        .setVulue(data)
        .then(res => {
          console.log(res);
          this.spinning = false;
          this.$store.state.setting.publicIp = data.publicIp;
          this.$store.state.setting.port = data.port;
          this.$store.state.setting.secret = data.secret;
        })
        .catch(err => {
          console.log(err);
          this.spinning = false;
        });
    },
    cancle() {
      this.form.setFieldsValue({
        publicIp: this.$store.state.setting.publicIp,
        port: this.$store.state.setting.port,
        secret: this.$store.state.setting.secret
      });
    },
    getIp() {
      let publicIp = this.form.getFieldValue("publicIp");

      if (this.$store.state.monitor.netInfo.data.publicIp !== publicIp) {
        this.form.setFieldsValue({
          publicIp: this.$store.state.monitor.netInfo.data.publicIp
        });
      }
    },
    checkPublicIp(rule, value, cb) {
      let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      if (value && !reg.test(value)) {
        return cb("The input is not valid IP!");
      }
      cb();
    },
    checkPort(rule, value, cb) {
      let reg = /^(\d)+$/g;
      let p = parseInt(value);
      if (!reg.test(value) || p > 65535 || p <= 0) {
        return cb("The input is not valid port!");
      }
      cb();
    },
    checkSecret(rule, value, cb) {
      // if (!value) {
      //   return cb("The input is not valid secret!");
      // }
      cb();
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

    .input-ip {
      width: calc(100% - 50px);
    }
    .button-ip {
      width: 50px;
    }
  }

  .setting-button {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
