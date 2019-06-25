<template>
  <div class="setting">
    <div class="setting-content">
      <a-form :form="form">
        <a-form-item label="公网IP" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-input placeholder="请输入公网IP!" v-model="publicIp"/>
        </a-form-item>
        <a-form-item label="端口号" :labelCol="{span: 4}" :wrapperCol="{span: 18}" required>
          <a-input placeholder="请输入端口号!" v-model="port"/>
        </a-form-item>
        <a-form-item label="Secret" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
          <a-textarea :rows="4" placeholder="请输入Secret!" v-model="secret"/>
        </a-form-item>
      </a-form>
    </div>
    <div class="setting-button">
      <a-button type="primary" @click="save">保存</a-button>
      <a-button type="primary" @click="cancle">取消</a-button>
    </div>
  </div>
</template>

<script>
import SettingContent from "../components/SettingContent";

export default {
  name: "setting",
  components: { SettingContent },
  data() {
    return {
      publicIp: this.$store.state.monitor.netInfo.data.publicIp,
      port: "4096",
      secret: ""
    };
  },
  computed: {},
  methods: {
    save() {},
    cancle() {}
  }
};
</script>

<style lang="less">
.setting {
  height: 100%;

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
