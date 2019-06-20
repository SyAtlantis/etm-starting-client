<template>
  <div class="step1">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        label="Nodejs"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
      >
        <div v-if="deploy['nodejs'].isInstalled" class="step1-form-deploy">
          <a-tag color="#87d068">已安装</a-tag>
          <div>版本：{{deploy['nodejs'].version}}</div>
        </div>
        <div v-else>
          <a-input-search v-decorator="[ 'nodejs', {rules: [{ required: true }]} ]" >
              <a-button slot="enterButton" icon="folder-open" directory>选择</a-button>
          </a-input-search>
        </div>
      </a-form-item>
      <a-form-item
        label="Git"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
      >
        <div v-if="deploy['git'].isInstalled" class="step1-form-deploy">
          <a-tag color="#87d068">已安装</a-tag>
          <div>版本：{{deploy['git'].version}}</div>
        </div>
        <div v-else>
          <a-input-search v-decorator="[ 'git', {rules: [{ required: true }]} ]" >
              <a-button slot="enterButton" icon="folder-open" directory>选择</a-button>
          </a-input-search>
        </div>
      </a-form-item>
      <a-form-item
        label="PM2"
        :labelCol="{lg: {span: 7}, sm: {span: 4}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 18} }"
        :required="false"
      >
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
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "step1",
  components: {},
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
      nodejsPath:""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    onchange(v){
      console.log(v)
    },
    preview(file){
      console.log(file)
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
