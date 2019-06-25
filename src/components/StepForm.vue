<template>
  <div class="steps">
    <a-steps class="steps-title" :current="step-1">
      <a-step v-for="item in steps" :key="item.key" :title="item.title"/>
    </a-steps>
    <div class="steps-content">
      <Step1 v-show="step == 1"/>
      <Step2 v-show="step == 2"/>
      <Step3 v-show="step == 3"/>
      <Step4 v-show="step == 4"/>
    </div>
  </div>
</template>

<script>
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default {
  name: "stepform",
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      steps: [
        {
          key: 1,
          title: "配置环境"
        },
        {
          key: 2,
          title: "安装程序"
        },
        {
          key: 3,
          title: "初始设置"
        },
        {
          key: 4,
          title: "安装完成"
        }
      ]
    };
  },
  computed: {
    step() {
      return this.$store.state.install.step;
    }
  },
  methods: {}
};
</script>

<style lang="less">
.steps {
  width: 100%;
  height: 100%;

  .steps-title {
    height: 60px;
    padding: 10px;
  }

  .steps-content {
    height: calc(100% - 60px);
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    padding: 20px;
  }
}
</style>
