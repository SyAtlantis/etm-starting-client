<template>
  <div class="setting-content">
    <a-form :form="form">
      <a-form-item
        label="端口号"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
        :required="isRequred"
      >
        <a-input placeholder="请输入端口号!" v-model="port"/>
      </a-form-item>
      <a-form-item
        label="Secret"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
        :required="isRequred"
      >
        <a-textarea :rows="4" placeholder="请输入Secret!" v-model="secret"/>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "step4",
  components: {},
  props: ["isRequred"],
  data() {
    return {
      form: this.$form.createForm(this),
      port: this.$store.state.setting.port,
      secret: this.$store.state.setting.secret
    };
  },
  updated() {
    this.$store.state.setting.port = this.port;
    this.$store.state.setting.secret = this.secret;
  },
  methods: {}
};
</script>

<style lang="less">
</style>
