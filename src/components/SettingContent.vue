<template>
  <div class="setting-content">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        label="端口号"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
        :required="isRequred"
      >
        <a-input placeholder="请输入端口号!" v-model="valuePort"/>
      </a-form-item>
      <a-form-item
        label="Secret"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
        :required="isRequred"
      >
        <a-textarea :rows="4" placeholder="请输入Secret!" v-model="valuePort"/>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "step4",
  components: {},
  props:["isRequred"],
  data() {
    return {
      form: this.$form.createForm(this),
      valuePort:"",
      valueSecret:""
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
};
</script>

<style lang="less">
</style>
